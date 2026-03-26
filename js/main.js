// js/main.js — O Poder da Rotina | Dra. Julia Resende

(function () {
  'use strict';

  // ============================================================
  // 1. PREFERS-REDUCED-MOTION
  // ============================================================
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ============================================================
  // 2. REGISTRAR PLUGIN GSAP
  // ============================================================
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // ============================================================
  // 3. ANIMAÇÕES DE ENTRADA POR SEÇÃO (scroll — não automático)
  // ============================================================
  function initAnimations() {
    if (reducedMotion) return;
    if (typeof gsap === 'undefined') return;

    // Elementos que animam ao entrar na viewport
    var animTargets = [
      '.hero__text',
      '.hero__images',
      '.dor__item',
      '.solucao__benefit',
      '.stat',
      '.card',
      '.depoimento',
      '.autoridade__credentials',
      '.autoridade__bio',
      '.garantia__text',
      '.faq__item',
      '.cta-final__title',
      '.cta-final__subtitle',
      '.cta-final .countdown'
    ];

    animTargets.forEach(function (selector) {
      var elements = document.querySelectorAll(selector);
      elements.forEach(function (el, i) {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          delay: i * 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        });
      });
    });
  }

  // ============================================================
  // 4. CONTAGEM ANIMADA DE NÚMEROS (seção Solução)
  // ============================================================
  function initCountNumbers() {
    var stats = document.querySelectorAll('.stat__number[data-count]');
    if (!stats.length) return;

    stats.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var suffix = el.textContent.replace(/[\d.]/g, '').trim(); // ex: "+"

      if (reducedMotion) {
        el.textContent = target.toLocaleString('pt-BR') + suffix;
        return;
      }

      if (typeof gsap === 'undefined') return;

      // Zerar o display antes de animar
      el.textContent = '0' + suffix;

      var obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true
        },
        onUpdate: function () {
          el.textContent = Math.round(obj.val).toLocaleString('pt-BR') + suffix;
        }
      });
    });
  }

  // ============================================================
  // 5. COUNTDOWN TIMER (sessionStorage)
  // ============================================================
  function initCountdown() {
    var DURATION = 15 * 60; // 15 minutos em segundos
    var KEY = 'lp_countdown_end';

    var endTime = sessionStorage.getItem(KEY);
    if (!endTime) {
      endTime = Date.now() + DURATION * 1000;
      sessionStorage.setItem(KEY, endTime);
    } else {
      endTime = parseInt(endTime, 10);
      // Bug fix: se o tempo já expirou (sessão antiga), reinicia o timer
      if (endTime <= Date.now()) {
        endTime = Date.now() + DURATION * 1000;
        sessionStorage.setItem(KEY, endTime);
      }
    }

    var ticker = null;
    var heroBox     = document.getElementById('countdown-hero');
    var heroDisplay = document.getElementById('countdown-hero-display');

    function updateDisplay() {
      var remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      var mm = String(Math.floor(remaining / 60)).padStart(2, '0');
      var ss = String(remaining % 60).padStart(2, '0');
      var timeStr = mm + ':' + ss;

      // Atualiza o hero (se ainda visivel)
      if (heroDisplay) heroDisplay.textContent = timeStr;

      // Atualiza o countdown do CTA final (exclui o hero pelo id)
      document.querySelectorAll('.countdown-display').forEach(function (el) {
        if (el.id !== 'countdown-hero-display') el.textContent = timeStr;
      });

      if (remaining === 0) {
        clearInterval(ticker);

        // Esconde o hero countdown inteiro
        if (heroBox) heroBox.style.display = 'none';

        // Atualiza mensagem no countdown do final
        document.querySelectorAll('.countdown__label').forEach(function (el) {
          if (el.id !== 'countdown-hero-display') {
            el.textContent = 'Oferta especial — garanta o seu antes que encerre!';
          }
        });
        document.querySelectorAll('.countdown-display').forEach(function (el) {
          if (el.id !== 'countdown-hero-display') {
            el.style.fontSize = '1.2rem';
            el.style.letterSpacing = '0';
            el.textContent = 'Ainda disponivel por tempo limitado';
          }
        });
      }
    }

    updateDisplay();
    ticker = setInterval(updateDisplay, 1000);
  }

  // ============================================================
  // 6. FAQ ACCORDION
  // ============================================================
  function initFAQ() {
    var items = document.querySelectorAll('.faq__item');
    if (!items.length) return;

    items.forEach(function (item) {
      var question = item.querySelector('.faq__question');
      var answer = item.querySelector('.faq__answer');
      if (!question || !answer) return;

      question.addEventListener('click', function () {
        var isOpen = question.getAttribute('aria-expanded') === 'true';

        // Fechar todos os outros
        items.forEach(function (other) {
          var otherQ = other.querySelector('.faq__question');
          var otherA = other.querySelector('.faq__answer');
          if (otherQ && otherA && other !== item) {
            otherQ.setAttribute('aria-expanded', 'false');
            if (reducedMotion || typeof gsap === 'undefined') {
              otherA.style.maxHeight = '0';
            } else {
              gsap.to(otherA, { maxHeight: 0, duration: 0.3, ease: 'power2.inOut' });
            }
          }
        });

        // Toggle atual
        if (isOpen) {
          question.setAttribute('aria-expanded', 'false');
          if (reducedMotion || typeof gsap === 'undefined') {
            answer.style.maxHeight = '0';
          } else {
            gsap.to(answer, { maxHeight: 0, duration: 0.3, ease: 'power2.inOut' });
          }
        } else {
          question.setAttribute('aria-expanded', 'true');
          var scrollHeight = answer.scrollHeight;
          if (reducedMotion || typeof gsap === 'undefined') {
            answer.style.maxHeight = scrollHeight + 'px';
          } else {
            gsap.to(answer, { maxHeight: scrollHeight, duration: 0.4, ease: 'power2.out' });
          }
        }
      });
    });
  }

  // ============================================================
  // 7. BOTÃO WHATSAPP FLUTUANTE (aparece após 300px de scroll)
  // ============================================================
  function initWhatsApp() {
    var btn = document.getElementById('whatsapp-btn');
    if (!btn) return;

    // Atualizar href com número do config.js
    if (typeof WHATSAPP_NUMBER !== 'undefined') {
      btn.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=Ol%C3%A1%2C+tenho+uma+d%C3%BAvida+sobre+o+ebook';
    }

    var shown = false;

    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > 300 && !shown) {
        shown = true;
        btn.classList.add('visible');
      } else if (scrollY <= 300 && shown) {
        shown = false;
        btn.classList.remove('visible');
      }
    }, { passive: true });
  }

  // ============================================================
  // 8. SELO GARANTIA — FLUTUAÇÃO
  // ============================================================
  function initSeloAnimation() {
    var selo = document.querySelector('.garantia__selo');
    if (!selo) return;

    if (reducedMotion) {
      selo.classList.add('floating');
      return;
    }

    if (typeof gsap !== 'undefined') {
      gsap.from(selo, {
        opacity: 0,
        scale: 0.6,
        duration: 0.8,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: selo,
          start: 'top 85%',
          once: true,
          onComplete: function () {
            selo.classList.add('floating');
          }
        },
        onComplete: function () {
          selo.classList.add('floating');
        }
      });
    } else {
      selo.classList.add('floating');
    }
  }

  // ============================================================
  // 9. EBOOK — ENTRADA GIRANDO + FLUTUAÇÃO
  // ============================================================
  function initEbookAnimation() {
    var ebook = document.getElementById('ebook-float');
    if (!ebook) return;

    if (reducedMotion) {
      ebook.classList.add('floating');
      return;
    }

    if (typeof gsap === 'undefined') {
      ebook.classList.add('floating');
      return;
    }

    // Entrada: gira 720° + fade + escala, depois flutua
    gsap.from(ebook, {
      rotationY: 720,
      opacity: 0,
      scale: 0.5,
      duration: 1.4,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: ebook,
        start: 'top 80%',
        once: true,
        onLeaveBack: function () {}
      },
      onComplete: function () {
        ebook.classList.add('floating');
      }
    });
  }

  // ============================================================
  // 9. INICIALIZAÇÃO
  // ============================================================
  document.addEventListener('DOMContentLoaded', function () {
    initCountdown();
    initFAQ();
    initWhatsApp();
    initAnimations();
    initCountNumbers();
    initEbookAnimation();
    initSeloAnimation();
  });

})();
