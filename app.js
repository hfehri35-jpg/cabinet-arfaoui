// Réglages du cabinet : à modifier ici si le numéro ou les horaires changent.
const CONFIG = {
  whatsapp: '21692859325',
  // Jour de la semaine (0 = dimanche) -> [heure d'ouverture, heure de fermeture]
  hours: {1: [8, 18], 2: [8, 18], 3: [8, 18], 4: [8, 18], 5: [8, 18], 6: [9, 13]},
  slotMinutes: 60,
  daysShown: 6,
  minNoticeHours: 2,
};

const FR = {
  'skip': 'Aller à la prise de rendez-vous',
  'brand': 'Maître Fatma Arfaoui',
  'nav.steps': 'Déroulement',
  'nav.faq': 'Questions',
  'nav.contact': 'Adresse',
  'nav.cta': 'Prendre rendez-vous',
  'hero.title': 'Maître Fatma Arfaoui',
  'hero.role': 'Avocate près la Cour de cassation, Tunis',
  'hero.lead': 'Maître Arfaoui est souvent en audience et ne peut pas toujours répondre au téléphone. Choisissez le jour et l’heure qui vous conviennent : le cabinet vous confirme le rendez-vous par WhatsApp.',
  'hero.call': 'Appeler le cabinet',
  'hero.more': 'Comment ça se passe ?',
  'book.title': 'Demander un rendez-vous',
  'book.day': 'Jour',
  'book.time': 'Heure',
  'book.name': 'Nom et prénom',
  'book.client': 'Vous êtes',
  'book.client.new': 'Nouveau client',
  'book.client.old': 'Déjà client',
  'book.urgent': 'Est-ce urgent ?',
  'book.urgent.yes': 'Urgent',
  'book.urgent.no': 'Pas urgent',
  'book.mode': 'Type de rendez-vous',
  'book.mode.office': 'Au cabinet',
  'book.mode.remote': 'À distance',
  'book.send': 'Envoyer la demande par WhatsApp',
  'book.note': 'WhatsApp s’ouvre avec un message déjà rédigé. Le rendez-vous n’est confirmé qu’après la réponse du cabinet.',
  'steps.eyebrow': 'Simple et rapide',
  'steps.cta': 'Demander un rendez-vous',
  'steps.title': 'Comment se passe un rendez-vous',
  's1.t': 'Vous choisissez le jour et l’heure', 's1.p': 'Avec le formulaire en haut de la page, puis vous envoyez la demande par WhatsApp.',
  's2.t': 'Le cabinet vous confirme', 's2.p': 'Vous recevez une réponse sur WhatsApp qui confirme le créneau, ou en propose un autre si Maître Arfaoui est en audience.',
  's3.t': 'Vous rencontrez Maître Arfaoui', 's3.p': 'Au cabinet, au Centre Urbain Nord, ou à distance par téléphone ou en visio.',
  'faq.eyebrow': 'Une question ?',
  'faq.title': 'Questions fréquentes',
  'q1.q': 'J’ai appelé et personne n’a répondu, que faire ?',
  'q1.a': 'Maître Arfaoui passe une grande partie de ses journées au tribunal. Envoyez votre demande depuis cette page ou écrivez directement sur WhatsApp : le cabinet vous rappelle.',
  'q2.q': 'Que dois-je apporter au premier rendez-vous ?',
  'q2.a': 'Votre carte d’identité et tous les documents liés au dossier : contrats, jugements, courriers, convocations. Plus le dossier est complet, plus la consultation est précise.',
  'q3.q': 'La consultation peut-elle se faire à distance ?',
  'q3.a': 'Oui, par téléphone ou en visio. Choisissez « À distance » dans la demande. La première consultation à distance est gratuite.',
  'q4.q': 'Ce que je dis à l’avocate reste-t-il confidentiel ?',
  'q4.a': 'Oui. L’avocat est tenu par la loi au secret professionnel : tout ce que vous dites ou remettez reste entre vous et le cabinet.',
  'c.title': 'Adresse et horaires',
  'c.addr': 'Centre Urbain Nord, Résidence Tour de Bureaux International City Center, 5<sup>e</sup> étage, bureau B06, Tunis',
  'c.week': 'Du lundi au vendredi',
  'c.sat': 'Samedi',
  'c.sun': 'Dimanche',
  'c.closed': 'Fermé',
  'c.wa': 'Écrire sur WhatsApp',
  'c.map': 'Ouvrir la carte',
  'foot': 'Cabinet de Maître Fatma Arfaoui, avocate près la Cour de cassation. Les informations de ce site sont générales et ne constituent pas une consultation juridique.',
};

const UI = {
  ar: {
    title: 'الأستاذة فاطمة العرفاوي، محامية لدى التعقيب بتونس',
    desc: 'مكتب الأستاذة فاطمة العرفاوي، محامية لدى التعقيب بتونس. اطلب موعدك مباشرة عبر الإنترنت.',
    errClient: 'اختر إن كنت حريفًا جديدًا أو حريفًا سابقًا.',
    switchTo: 'Français', switchLang: 'fr',
    locale: 'ar-TN',
    noSlots: 'لا توجد ساعات متاحة في هذا اليوم.',
    errName: 'اكتب اسمك ولقبك حتى يعرف المكتب من يطلب الموعد.',
    errSlot: 'اختر يومًا وساعة قبل إرسال الطلب.',
    menu: 'القائمة',
    openNow: (close) => `المكتب مفتوح الآن · يغلق على الساعة ${close}`,
    closedNow: (when, time) => `المكتب مغلق الآن · يفتح ${when} على الساعة ${time}`,
    today: 'اليوم', tomorrow: 'غدًا',
    summary: (day, time) => `موعدك: ${day} على الساعة ${time}`,
    msg: (d) => `${d.urgent ? '⚠️ طلب عاجل\n\n' : ''}السلام عليكم أستاذة، أرغب في حجز موعد.\nالاسم: ${d.name}\nالحريف: ${d.client}\nعاجل: ${d.urgency}\nاليوم: ${d.day}\nالساعة: ${d.time}\nطريقة الموعد: ${d.mode}`,
  },
  fr: {
    title: 'Maître Fatma Arfaoui, avocate près la Cour de cassation à Tunis',
    desc: 'Cabinet de Maître Fatma Arfaoui, avocate près la Cour de cassation à Tunis. Demandez votre rendez-vous en ligne.',
    errClient: 'Indiquez si vous êtes un nouveau client ou déjà client.',
    switchTo: 'العربية', switchLang: 'ar',
    locale: 'fr-FR',
    noSlots: 'Aucun créneau disponible ce jour-là.',
    errName: 'Indiquez votre nom et prénom pour que le cabinet sache qui demande le rendez-vous.',
    errSlot: 'Choisissez un jour et une heure avant d’envoyer la demande.',
    menu: 'Menu',
    openNow: (close) => `Ouvert maintenant · ferme à ${close}`,
    closedNow: (when, time) => `Fermé pour le moment · ouvre ${when} à ${time}`,
    today: 'aujourd’hui', tomorrow: 'demain',
    summary: (day, time) => `Votre créneau : ${day} à ${time}`,
    msg: (d) => `${d.urgent ? '⚠️ DEMANDE URGENTE\n\n' : ''}Bonjour Maître, je souhaite prendre rendez-vous.\nNom : ${d.name}\nClient : ${d.client}\nUrgence : ${d.urgency}\nJour : ${d.day}\nHeure : ${d.time}\nType : ${d.mode}`,
  },
};

const $ = (s) => document.querySelector(s);
const nodes = [...document.querySelectorAll('[data-i18n]')];
const AR = Object.fromEntries(nodes.map((n) => [n.dataset.i18n, n.innerHTML]));
let lang = 'ar';

// --- Créneaux (heure de Tunis : UTC+1 toute l'année) ---
const tunisNow = () => new Date(Date.now() + 3600e3);
const pad = (n) => String(n).padStart(2, '0');

function slotsFor(day, index) {
  const range = CONFIG.hours[day.getUTCDay()];
  if (!range) return [];
  const now = tunisNow();
  const earliest = now.getUTCHours() * 60 + now.getUTCMinutes() + CONFIG.minNoticeHours * 60;
  const out = [];
  for (let m = range[0] * 60; m + CONFIG.slotMinutes <= range[1] * 60; m += CONFIG.slotMinutes) {
    if (index === 0 && m < earliest) continue;
    out.push(`${pad(Math.floor(m / 60))}:${pad(m % 60)}`);
  }
  return out;
}

function openDays() {
  const now = tunisNow();
  const days = [];
  for (let i = 0; days.length < CONFIG.daysShown && i < 21; i++) {
    const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + i));
    const slots = slotsFor(d, i);
    if (slots.length) days.push({iso: d.toISOString().slice(0, 10), date: d, slots});
  }
  return days;
}

const fmt = (date, opts) => new Intl.DateTimeFormat(UI[lang].locale, {timeZone: 'UTC', ...opts}).format(date);

let DAYS = openDays();
let selectedDay = DAYS[0] ? DAYS[0].iso : null;
let selectedTime = null;

function renderDays() {
  $('#days').innerHTML = DAYS.map((d) => `
    <label class="chip"><input type="radio" name="day" value="${d.iso}" ${d.iso === selectedDay ? 'checked' : ''}>
    <span>${fmt(d.date, {weekday: 'long'})}<small>${fmt(d.date, {day: 'numeric', month: 'short'})}</small></span></label>`).join('');
}

function renderTimes() {
  const day = DAYS.find((d) => d.iso === selectedDay);
  if (!day) { $('#times').innerHTML = `<p class="empty">${UI[lang].noSlots}</p>`; return; }
  if (!day.slots.includes(selectedTime)) selectedTime = null;
  $('#times').innerHTML = day.slots.map((t) => `
    <label class="chip"><input type="radio" name="time" value="${t}" ${t === selectedTime ? 'checked' : ''}>
    <span dir="ltr">${t}</span></label>`).join('');
}

function setLang(next) {
  lang = next;
  const dict = lang === 'fr' ? FR : AR;
  nodes.forEach((n) => { if (dict[n.dataset.i18n] != null) n.innerHTML = dict[n.dataset.i18n]; });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = UI[lang].title;
  document.querySelector('meta[name="description"]').content = UI[lang].desc;
  const btn = $('#lang-btn');
  btn.textContent = UI[lang].switchTo;
  btn.lang = UI[lang].switchLang;
  btn.dir = UI[lang].switchLang === 'ar' ? 'rtl' : 'ltr';
  $('#error').hidden = true;
  $('#menu-btn').setAttribute('aria-label', UI[lang].menu);
  renderDays(); renderTimes(); renderSummary(); renderStatus();
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

$('#lang-btn').addEventListener('click', () => setLang(lang === 'ar' ? 'fr' : 'ar'));

$('#days').addEventListener('change', (e) => { selectedDay = e.target.value; renderTimes(); renderSummary(); });
$('#times').addEventListener('change', (e) => { selectedTime = e.target.value; $('#error').hidden = true; renderSummary(); });
$('#client').addEventListener('change', () => { $('#error').hidden = true; });

// Rappel du créneau choisi, sous le formulaire
function renderSummary() {
  const box = $('#summary');
  const day = DAYS.find((d) => d.iso === selectedDay);
  if (!day || !selectedTime) { box.hidden = true; return; }
  box.querySelector('span').textContent = UI[lang].summary(fmt(day.date, {weekday: 'long', day: 'numeric', month: 'long'}), selectedTime);
  box.hidden = false;
}

// --- Ouvert / fermé en ce moment (heure de Tunis) ---
function renderStatus() {
  const now = tunisNow();
  const today = now.getUTCDay();
  const mins = now.getUTCHours() * 60 + now.getUTCMinutes();
  const range = CONFIG.hours[today];
  let text = '', open = false;
  if (range && mins >= range[0] * 60 && mins < range[1] * 60) {
    open = true;
    text = UI[lang].openNow(`${pad(range[1])}:00`);
  } else {
    for (let i = 0; i < 8; i++) {
      const r = CONFIG.hours[(today + i) % 7];
      if (!r || (i === 0 && mins >= r[0] * 60)) continue;
      const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + i));
      const when = i === 0 ? UI[lang].today : i === 1 ? UI[lang].tomorrow : fmt(d, {weekday: 'long'});
      text = UI[lang].closedNow(when, `${pad(r[0])}:00`);
      break;
    }
  }
  document.querySelectorAll('.status').forEach((el) => {
    el.classList.toggle('open', open);
    el.querySelector('.status-txt').textContent = text;
    el.hidden = !text;
  });
  document.querySelectorAll('.hours tr').forEach((tr) => {
    tr.classList.toggle('today', tr.dataset.days.split(',').includes(String(today)));
  });
}
setInterval(renderStatus, 60e3);


$('#rdv').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('#name').value.trim();
  const err = $('#error');
  const day = DAYS.find((d) => d.iso === selectedDay);
  if (!day || !selectedTime) { err.textContent = UI[lang].errSlot; err.hidden = false; return; }
  if (!name) { err.textContent = UI[lang].errName; err.hidden = false; $('#name').focus(); return; }
  const client = document.querySelector('input[name="client"]:checked');
  if (!client) { err.textContent = UI[lang].errClient; err.hidden = false; $('#client input').focus(); return; }
  err.hidden = true;
  const label = (input) => input.nextElementSibling.textContent;
  const urgent = document.querySelector('input[name="urgent"]:checked');
  const mode = label(document.querySelector('input[name="mode"]:checked'));
  const text = UI[lang].msg({
    name,
    day: fmt(day.date, {weekday: 'long', day: 'numeric', month: 'long'}),
    time: selectedTime,
    client: label(client),
    urgency: label(urgent),
    urgent: urgent.value === 'yes',
    mode,
  });
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});

// --- Menu mobile ---
const menuBtn = $('#menu-btn');
const nav = $('#nav');
const closeMenu = () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); };
menuBtn.addEventListener('click', () => {
  const open = !nav.classList.contains('open');
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

// --- Effets au défilement : barre de progression, en-tête, bouton WhatsApp ---
const header = $('#top');
const bar = $('#progress');
const fab = $('#fab');
const hero = $('.hero');
let ticking = false;
function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  header.classList.toggle('scrolled', y > 10);
  fab.classList.toggle('show', y > hero.offsetHeight * 0.85);
  ticking = false;
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, {passive: true});
addEventListener('resize', onScroll);
onScroll();

// --- Apparition des blocs au défilement, et lien actif dans le menu ---
if ('IntersectionObserver' in window) {
  document.querySelectorAll('.steps, .faq').forEach((group) => {
    [...group.children].forEach((el, i) => el.style.setProperty('--i', i % 6));
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, {rootMargin: '0px 0px -8% 0px', threshold: 0.08});
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  const links = [...document.querySelectorAll('.nav a:not(.nav-cta)')];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${en.target.id}`));
    });
  }, {rootMargin: '-45% 0px -50% 0px'});
  document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
}

// Langue de départ : ?lang=fr dans le lien, sinon le dernier choix, sinon l'arabe.
let start = new URLSearchParams(location.search).get('lang');
if (!start) { try { start = localStorage.getItem('lang'); } catch (e) {} }
setLang(start === 'fr' ? 'fr' : 'ar');
