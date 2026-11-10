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
  'nav.domains': 'Domaines',
  'nav.steps': 'Déroulement',
  'nav.faq': 'Questions',
  'nav.contact': 'Adresse',
  'hero.title': 'Maître Fatma Arfaoui',
  'hero.role': 'Avocate près la Cour de cassation, Tunis',
  'hero.lead': 'Maître Arfaoui est souvent en audience et ne peut pas toujours répondre au téléphone. Choisissez le jour et l’heure qui vous conviennent : le cabinet vous confirme le rendez-vous par WhatsApp.',
  'hero.call': 'Appeler le cabinet',
  'book.title': 'Demander un rendez-vous',
  'book.day': 'Jour',
  'book.time': 'Heure',
  'book.name': 'Nom et prénom',
  'book.subject': 'Objet de la consultation',
  'book.mode': 'Type de rendez-vous',
  'book.mode.office': 'Au cabinet',
  'book.mode.remote': 'À distance',
  'book.send': 'Envoyer la demande par WhatsApp',
  'book.note': 'WhatsApp s’ouvre avec un message déjà rédigé. Le rendez-vous n’est confirmé qu’après la réponse du cabinet.',
  'dom.title': 'Domaines d’intervention',
  'dom.intro': 'Le cabinet conseille et défend les particuliers comme les entreprises, devant toutes les juridictions.',
  'd1.t': 'Droit commercial', 'd1.p': 'Contrats commerciaux, fonds de commerce, recouvrement de créances et litiges entre commerçants.',
  'd2.t': 'Droit civil et de la famille', 'd2.p': 'Divorce, garde et pension, successions et partages, responsabilité et indemnisation.',
  'd3.t': 'Droit des sociétés', 'd3.p': 'Création de sociétés, rédaction des statuts, conflits entre associés, liquidation.',
  'd4.t': 'Droit fiscal', 'd4.p': 'Vérification fiscale, opposition aux arrêtés de taxation et litiges avec l’administration.',
  'd5.t': 'Droit des investissements', 'd5.p': 'Accompagnement des investisseurs tunisiens et étrangers dans leurs démarches d’implantation.',
  'd6.t': 'Arbitrage et contentieux', 'd6.p': 'Représentation devant les tribunaux et les instances arbitrales, négociation avant procès.',
  'd7.t': 'Propriété intellectuelle', 'd7.p': 'Dépôt et protection des marques, droits d’auteur, actions en contrefaçon.',
  'd8.t': 'Droit international', 'd8.p': 'Contrats et opérations transfrontalières, arbitrage international.',
  'd9.t': 'Droit pénal', 'd9.p': 'Défense des prévenus et constitution de partie civile, à chaque étape de la procédure.',
  'd10.t': 'Droit foncier', 'd10.p': 'Ventes immobilières, immatriculation, litiges de propriété et de bail.',
  'd11.t': 'Droit administratif', 'd11.p': 'Recours contre les décisions de l’administration, contentieux devant le Tribunal administratif.',
  'd12.t': 'Droit du travail', 'd12.p': 'Contrats de travail, licenciement abusif et litiges devant les prud’hommes.',
  'steps.title': 'Comment se passe un rendez-vous',
  's1.t': 'Vous choisissez le jour et l’heure', 's1.p': 'Avec le formulaire en haut de la page, puis vous envoyez la demande par WhatsApp.',
  's2.t': 'Le cabinet vous confirme', 's2.p': 'Vous recevez une réponse sur WhatsApp qui confirme le créneau, ou en propose un autre si Maître Arfaoui est en audience.',
  's3.t': 'Vous rencontrez Maître Arfaoui', 's3.p': 'Au cabinet, au Centre Urbain Nord, ou à distance par téléphone ou en visio.',
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
    other: 'موضوع آخر',
    switchTo: 'Français', switchLang: 'fr',
    locale: 'ar-TN',
    noSlots: 'لا توجد ساعات متاحة في هذا اليوم.',
    errName: 'اكتب اسمك ولقبك حتى يعرف المكتب من يطلب الموعد.',
    errSlot: 'اختر يومًا وساعة قبل إرسال الطلب.',
    msg: (d) => `السلام عليكم أستاذة، أرغب في حجز موعد.\nالاسم: ${d.name}\nاليوم: ${d.day}\nالساعة: ${d.time}\nالموضوع: ${d.subject}\nطريقة الموعد: ${d.mode}`,
  },
  fr: {
    title: 'Maître Fatma Arfaoui, avocate près la Cour de cassation à Tunis',
    desc: 'Cabinet de Maître Fatma Arfaoui, avocate près la Cour de cassation à Tunis. Demandez votre rendez-vous en ligne.',
    other: 'Autre sujet',
    switchTo: 'العربية', switchLang: 'ar',
    locale: 'fr-FR',
    noSlots: 'Aucun créneau disponible ce jour-là.',
    errName: 'Indiquez votre nom et prénom pour que le cabinet sache qui demande le rendez-vous.',
    errSlot: 'Choisissez un jour et une heure avant d’envoyer la demande.',
    msg: (d) => `Bonjour Maître, je souhaite prendre rendez-vous.\nNom : ${d.name}\nJour : ${d.day}\nHeure : ${d.time}\nObjet : ${d.subject}\nType : ${d.mode}`,
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

function renderSubjects() {
  const sel = $('#subject');
  const keep = sel.selectedIndex;
  const titles = [...document.querySelectorAll('.domains h3')].map((h) => h.textContent);
  sel.innerHTML = [...titles, UI[lang].other].map((t) => `<option>${t}</option>`).join('');
  if (keep > 0) sel.selectedIndex = keep;
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
  renderDays(); renderTimes(); renderSubjects();
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

$('#lang-btn').addEventListener('click', () => setLang(lang === 'ar' ? 'fr' : 'ar'));

$('#days').addEventListener('change', (e) => { selectedDay = e.target.value; renderTimes(); });
$('#times').addEventListener('change', (e) => { selectedTime = e.target.value; $('#error').hidden = true; });

$('#rdv').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('#name').value.trim();
  const err = $('#error');
  const day = DAYS.find((d) => d.iso === selectedDay);
  if (!day || !selectedTime) { err.textContent = UI[lang].errSlot; err.hidden = false; return; }
  if (!name) { err.textContent = UI[lang].errName; err.hidden = false; $('#name').focus(); return; }
  err.hidden = true;
  const mode = document.querySelector('input[name="mode"]:checked').nextElementSibling.textContent;
  const text = UI[lang].msg({
    name,
    day: fmt(day.date, {weekday: 'long', day: 'numeric', month: 'long'}),
    time: selectedTime,
    subject: $('#subject').value,
    mode,
  });
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});

// Langue de départ : ?lang=fr dans le lien, sinon le dernier choix, sinon l'arabe.
let start = new URLSearchParams(location.search).get('lang');
if (!start) { try { start = localStorage.getItem('lang'); } catch (e) {} }
setLang(start === 'fr' ? 'fr' : 'ar');
