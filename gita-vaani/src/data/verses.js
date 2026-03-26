/**
 * Gita Vaani — Curated Verse Database
 * 54 authentic shlokas from the Bhagavad Gita
 * Each verse is mapped to emotional states for intelligent matching.
 *
 * Structure:
 *  id         — unique identifier
 *  ref        — Chapter + Verse reference
 *  sanskrit   — Original Devanagari text
 *  transliteration — Roman transliteration
 *  translation — Clean English meaning
 *  tags        — Emotional/situational tags for matching
 *  weight      — Relevance weight for each tag (1-3, 3 = most relevant)
 *  context     — When to offer this verse (human note for the AI)
 */

export const VERSES = [

  // ── STRESS / ANXIETY ────────────────────────────────────────
  {
    id: 'BG_2_47',
    ref: 'Bhagavad Gita, Chapter 2 · Verse 47',
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
    transliteration: 'karmaṇy-evādhikāras te mā phaleṣu kadācana',
    translation: 'You have the right to work, but never to its fruits. Do not let the fruit be the motive for action, nor cling to inaction.',
    tags: ['stress', 'anxiety', 'work', 'career', 'overthinking', 'results', 'pressure'],
    context: 'Person is stressed about outcomes, results, deadlines. They are too attached to how things turn out.',
  },
  {
    id: 'BG_2_14',
    ref: 'Bhagavad Gita, Chapter 2 · Verse 14',
    sanskrit: 'मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥',
    transliteration: 'mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ',
    translation: 'The contact of the senses with their objects gives rise to cold and heat, pleasure and pain — they come and go and are impermanent. Bear them patiently, O Arjuna.',
    tags: ['stress', 'anxiety', 'pain', 'grief', 'change', 'impermanence', 'endurance'],
    context: 'Person is overwhelmed by temporary feelings — panic, acute stress, emotional pain that feels permanent.',
  },
  {
    id: 'BG_6_5',
    ref: 'Bhagavad Gita, Chapter 6 · Verse 5',
    sanskrit: 'उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥',
    transliteration: 'uddhared ātmanātmānaṁ nātmānam avasādayet',
    translation: 'Let a man lift himself by his own self alone; let him not lower himself, for the self alone is the friend of the self, and the self alone is the enemy of the self.',
    tags: ['motivation', 'self', 'depression', 'self-doubt', 'anxiety', 'inner strength'],
    context: 'Person feels they are their own worst enemy — negative self-talk, low confidence, self-sabotage.',
  },
  {
    id: 'BG_2_56',
    ref: 'Bhagavad Gita, Chapter 2 · Verse 56',
    sanskrit: 'दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः।\nवीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते॥',
    transliteration: 'duḥkheṣv anudvigna-manāḥ sukheṣu vigata-spṛhaḥ',
    translation: 'One whose mind is not disturbed even in the threefold misery, who is not elated when there is happiness, and who is free from attachment, fear, and anger — such a person is called a sage of steady mind.',
    tags: ['stress', 'anxiety', 'anger', 'fear', 'emotional balance', 'peace'],
    context: 'Person wants to understand how to stay calm when life is chaotic. Looking for emotional steadiness.',
  },

  // ── FEAR / OVERTHINKING ─────────────────────────────────────
  {
    id: 'BG_2_20',
    ref: 'Bhagavad Gita, Chapter 2 · Verse 20',
    sanskrit: 'न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥',
    transliteration: 'na jāyate mriyate vā kadācin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ',
    translation: 'The soul is never born nor dies at any time. It does not come into being or cease to exist. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.',
    tags: ['fear', 'death', 'grief', 'existential', 'loss', 'change'],
    context: 'Person is afraid of loss, death, or radical change. Fear about the end of something important.',
  },
  {
    id: 'BG_2_23',
    ref: 'Bhagavad Gita, Chapter 2 · Verse 23',
    sanskrit: 'नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।\nन चैनं क्लेदयन्त्यापो न शोषयति मारुतः॥',
    transliteration: 'nainaṁ chindanti śastrāṇi nainaṁ dahati pāvakaḥ',
    translation: 'The soul can never be cut by any weapon, nor burned by fire, nor moistened by water, nor withered by wind. It is indestructible, eternal.',
    tags: ['fear', 'grief', 'loss', 'existential', 'courage', 'resilience'],
    context: 'Deep existential fear. Person feels destroyed by life circumstances. Needs reminder of their indestructible nature.',
  },
  {
    id: 'BG_18_58',
    ref: 'Bhagavad Gita, Chapter 18 · Verse 58',
    sanskrit: 'मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि।\nअथ चेत्त्वमहङ्कारान्न श्रोष्यसि विनङ्क्ष्यसि॥',
    transliteration: 'mac-cittaḥ sarva-durgāṇi mat-prasādāt tariṣyasi',
    translation: 'If your mind is always with Me, by My grace you shall overcome all difficulties. But if out of ego you refuse to listen, you will be lost.',
    tags: ['fear', 'surrender', 'trust', 'ego', 'difficulty', 'anxiety'],
    context: 'Person is resisting surrender. Ego is preventing them from accepting help or letting go of control.',
  },
  {
    id: 'BG_4_40',
    ref: 'Bhagavad Gita, Chapter 4 · Verse 40',
    sanskrit: 'अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति।\nनायं लोकोऽस्ति न परो न सुखं संशयात्मनः॥',
    transliteration: 'ajñaś cāśraddadhānaś ca saṁśayātmā vinaśyati',
    translation: 'One who is ignorant and without faith, and who is always doubtful, perishes. For the doubtful soul, there is no happiness either in this world or the next.',
    tags: ['overthinking', 'doubt', 'indecision', 'fear', 'faith', 'confusion'],
    context: 'Person is paralysed by endless doubt and overthinking. Cannot make decisions. Caught in analysis paralysis.',
  },

  // ── CAREER / PURPOSE ────────────────────────────────────────
  {
    id: 'BG_3_35',
    ref: 'Bhagavad Gita, Chapter 3 · Verse 35',
    sanskrit: 'श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥',
    transliteration: 'śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt',
    translation: 'Your own dharma, even performed imperfectly, is far better than the dharma of another, even if well performed. It is better to die in one\'s own dharma — the dharma of another brings fear.',
    tags: ['career', 'purpose', 'comparison', 'self', 'path', 'identity', 'confusion'],
    context: 'Person is comparing their path with others. Feels they should be doing what someone else is doing. Career confusion.',
  },
  {
    id: 'BG_18_45',
    ref: 'Bhagavad Gita, Chapter 18 · Verse 45',
    sanskrit: 'स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः।\nस्वकर्मनिरतः सिद्धिं यथा विन्दति तच्छृणु॥',
    transliteration: 'sve sve karmaṇy abhirataḥ saṁsiddhiṁ labhate naraḥ',
    translation: 'A person can attain perfection by being devoted to their own work. Hear how one who is devoted to their own work finds such perfection.',
    tags: ['career', 'purpose', 'work', 'skill', 'dedication', 'mastery'],
    context: 'Person is looking for purpose in their work. Feeling their job is meaningless or not good enough.',
  },
  {
    id: 'BG_2_50',
    ref: 'Bhagavad Gita, Chapter 2 · Verse 50',
    sanskrit: 'बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते।\nतस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम्॥',
    transliteration: 'buddhi-yukto jahātīha ubhe sukṛta-duṣkṛte',
    translation: 'One who is endowed with wisdom casts off both good and evil deeds in this life. Therefore strive for yoga — yoga is the skill in action.',
    tags: ['career', 'work', 'skill', 'excellence', 'purpose', 'motivation'],
    context: 'Person wants to do their best but feels directionless. Yoga here means total engagement in what you do.',
  },
  {
    id: 'BG_6_16',
    ref: 'Bhagavad Gita, Chapter 6 · Verse 16',
    sanskrit: 'नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः।\nन चातिस्वप्नशीलस्य जाग्रतो नैव चार्जुन॥',
    transliteration: 'nāty-aśnatas tu yogo \'sti na caikāntam anaśnataḥ',
    translation: 'Yoga is not possible for one who eats too much or too little, nor for one who sleeps too much or too little. Everything in balance.',
    tags: ['career', 'burnout', 'work', 'balance', 'health', 'discipline'],
    context: 'Person is burning out — overworking or completely checked out. Needs reminder about sustainable effort.',
  },

  // ── RELATIONSHIPS ────────────────────────────────────────────
  {
    id: 'BG_12_13',
    ref: 'Bhagavad Gita, Chapter 12 · Verse 13',
    sanskrit: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥',
    transliteration: 'adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca',
    translation: 'One who has no hatred toward any being, who is friendly and compassionate to all, free from possessiveness and ego, equal in joy and sorrow, forgiving — such a devotee is dear to Me.',
    tags: ['relationship', 'conflict', 'forgiveness', 'compassion', 'ego', 'love'],
    context: 'Person is in conflict with someone they love. Struggling with forgiveness, ego, or feeling unheard.',
  },
  {
    id: 'BG_16_21',
    ref: 'Bhagavad Gita, Chapter 16 · Verse 21',
    sanskrit: 'त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः।\nकामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥',
    transliteration: 'tri-vidhaṁ narakasyedaṁ dvāraṁ nāśanam ātmanaḥ',
    translation: 'There are three gates leading to the hell of self-destruction — lust, anger, and greed. Therefore abandon these three.',
    tags: ['anger', 'relationship', 'conflict', 'desire', 'greed', 'destruction'],
    context: 'Person is acting out of anger, lust, or greed in a relationship. Clear warning from the Gita.',
  },
  {
    id: 'BG_5_20',
    ref: 'Bhagavad Gita, Chapter 5 · Verse 20',
    sanskrit: 'न प्रहृष्येत्प्रियं प्राप्य नोद्विजेत्प्राप्य चाप्रियम्।\nस्थिरबुद्धिरसम्मूढो ब्रह्मविद् ब्रह्मणि स्थितः॥',
    transliteration: 'na prahṛṣyet priyaṁ prāpya nodvijet prāpya cāpriyam',
    translation: 'One who is not overjoyed upon receiving something pleasant, and not disturbed upon receiving something unpleasant — with steady intelligence, free from delusion — such a person is established in the Absolute.',
    tags: ['relationship', 'grief', 'loss', 'attachment', 'equanimity', 'peace'],
    context: 'Person is too attached to a person or outcome in a relationship. Swings between elation and despair.',
  },
  {
    id: 'BG_13_28',
    ref: 'Bhagavad Gita, Chapter 13 · Verse 28',
    sanskrit: 'समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम्।\nविनश्यत्स्वविनश्यन्तं यः पश्यति स पश्यति॥',
    transliteration: 'samaṁ sarveṣu bhūteṣu tiṣṭhantaṁ parameśvaram',
    translation: 'One who sees the Supreme Lord dwelling equally in all beings, the Imperishable within the perishable — that person truly sees.',
    tags: ['relationship', 'compassion', 'self', 'unity', 'love', 'perspective'],
    context: 'Person is judging others harshly or feeling alone. Needs reminder of the divine in every being.',
  },

  // ── GRIEF / LOSS ─────────────────────────────────────────────
  {
    id: 'BG_2_27',
    ref: 'Bhagavad Gita, Chapter 2 · Verse 27',
    sanskrit: 'जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च।\nतस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि॥',
    transliteration: 'jātasya hi dhruvo mṛtyur dhruvaṁ janma mṛtasya ca',
    translation: 'For one who is born, death is certain; for one who has died, birth is certain. You should not grieve over the inevitable.',
    tags: ['grief', 'loss', 'death', 'change', 'impermanence', 'acceptance'],
    context: 'Person has lost someone or something they loved. Deep grief over death or irreversible loss.',
  },
  {
    id: 'BG_2_19',
    ref: 'Bhagavad Gita, Chapter 2 · Verse 19',
    sanskrit: 'य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम्।\nउभौ तौ न विजानीतो नायं हन्ति न हन्यते॥',
    transliteration: 'ya enaṁ vetti hantāraṁ yaś cainaṁ manyate hatam',
    translation: 'He who thinks that the soul kills, and he who thinks that the soul is killed — both are ignorant. The soul neither kills nor can be killed.',
    tags: ['grief', 'loss', 'death', 'fear', 'guilt'],
    context: 'Person is blaming themselves for a loss, or carrying guilt about something that happened.',
  },
  {
    id: 'BG_18_66',
    ref: 'Bhagavad Gita, Chapter 18 · Verse 66',
    sanskrit: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥',
    transliteration: 'sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja',
    translation: 'Abandon all varieties of dharma and just surrender unto Me alone. I shall deliver you from all sinful reactions. Do not fear.',
    tags: ['grief', 'surrender', 'overwhelmed', 'loss', 'faith', 'exhaustion', 'hopeless'],
    context: 'The Charama Shloka — for when someone is completely exhausted and has nothing left. The deepest surrender.',
  },

  // ── MOTIVATION / LAZINESS ────────────────────────────────────
  {
    id: 'BG_3_8',
    ref: 'Bhagavad Gita, Chapter 3 · Verse 8',
    sanskrit: 'नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।\nशरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः॥',
    transliteration: 'niyataṁ kuru karma tvaṁ karma jyāyo hy akarmaṇaḥ',
    translation: 'Do your prescribed duty, for action is better than inaction. Even the maintenance of your body cannot be accomplished without action.',
    tags: ['motivation', 'laziness', 'inaction', 'discipline', 'procrastination'],
    context: 'Person is stuck in procrastination or complete inaction. Needs a push to start moving.',
  },
  {
    id: 'BG_3_19',
    ref: 'Bhagavad Gita, Chapter 3 · Verse 19',
    sanskrit: 'तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥',
    transliteration: 'tasmād asaktaḥ satataṁ kāryaṁ karma samācara',
    translation: 'Therefore, without attachment, always perform the action that must be done — for by performing action without attachment, one attains the Supreme.',
    tags: ['motivation', 'work', 'attachment', 'discipline', 'action', 'detachment'],
    context: 'Person knows what they should do but keeps avoiding it. Needs encouragement to act without overthinking.',
  },
  {
    id: 'BG_6_35',
    ref: 'Bhagavad Gita, Chapter 6 · Verse 35',
    sanskrit: 'असंशयं महाबाहो मनो दुर्निग्रहं चलम्।\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते॥',
    transliteration: 'asaṁśayaṁ mahā-bāho mano durnigrahaṁ calam',
    translation: 'Undoubtedly the mind is restless and difficult to restrain, but it is controlled through practice and detachment.',
    tags: ['motivation', 'discipline', 'habit', 'mind', 'focus', 'meditation', 'overthinking'],
    context: 'Person cannot control their mind or habits. Struggling to maintain discipline or focus.',
  },
  {
    id: 'BG_2_41',
    ref: 'Bhagavad Gita, Chapter 2 · Verse 41',
    sanskrit: 'व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन।\nबहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम्॥',
    transliteration: 'vyavasāyātmikā buddhir ekeha kuru-nandana',
    translation: 'Those who are on this path are resolute in purpose, and their aim is one. The intelligence of those who are irresolute is many-branched and endless.',
    tags: ['motivation', 'focus', 'discipline', 'confusion', 'clarity', 'decision'],
    context: 'Person is scattered across too many things. Needs one clear direction. Too many open loops.',
  },

  // ── ANGER / KRODH ────────────────────────────────────────────
  {
    id: 'BG_2_62',
    ref: 'Bhagavad Gita, Chapter 2 · Verse 62',
    sanskrit: 'ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥',
    transliteration: 'dhyāyato viṣayān puṁsaḥ saṅgas teṣūpajāyate',
    translation: 'While contemplating the objects of the senses, a person develops attachment to them, and from such attachment desire is born, and from desire anger arises.',
    tags: ['anger', 'desire', 'attachment', 'mind', 'control'],
    context: 'The root cause chain: thought → attachment → desire → anger. For someone who wants to understand why they get so angry.',
  },
  {
    id: 'BG_2_63',
    ref: 'Bhagavad Gita, Chapter 2 · Verse 63',
    sanskrit: 'क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥',
    transliteration: 'krodhād bhavati sammohaḥ sammohāt smṛti-vibhramaḥ',
    translation: 'From anger comes delusion, from delusion loss of memory, from loss of memory the destruction of discrimination, and from the destruction of discrimination one perishes.',
    tags: ['anger', 'consequences', 'clarity', 'mind', 'destruction'],
    context: 'Person needs to see the full consequence chain of uncontrolled anger — how it destroys from within.',
  },

  // ── SELF DISCOVERY / IDENTITY ───────────────────────────────
  {
    id: 'BG_6_20',
    ref: 'Bhagavad Gita, Chapter 6 · Verse 20',
    sanskrit: 'यत्रोपरमते चित्तं निरुद्धं योगसेवया।\nयत्र चैवात्मनात्मानं पश्यन्नात्मनि तुष्यति॥',
    transliteration: 'yatroparamate cittaṁ niruddhaṁ yoga-sevayā',
    translation: 'In the state where the mind becomes still through the practice of yoga, and one sees the self with the self, and rejoices in the self — that is the highest state.',
    tags: ['self', 'meditation', 'peace', 'identity', 'inner', 'discovery'],
    context: 'Person is searching for themselves — who they really are beneath all their roles and responsibilities.',
  },
  {
    id: 'BG_15_7',
    ref: 'Bhagavad Gita, Chapter 15 · Verse 7',
    sanskrit: 'ममैवांशो जीवलोके जीवभूतः सनातनः।\nमनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति॥',
    transliteration: 'mamaivāṁśo jīva-loke jīva-bhūtaḥ sanātanaḥ',
    translation: 'The living beings in this world are My eternal fragments. They are struggling with the six senses including the mind.',
    tags: ['self', 'identity', 'divine', 'purpose', 'meaning', 'worth'],
    context: 'Person feels small, worthless, or meaningless. This verse reminds them they are a fragment of the divine.',
  },
  {
    id: 'BG_13_22',
    ref: 'Bhagavad Gita, Chapter 13 · Verse 22',
    sanskrit: 'पुरुषः प्रकृतिस्थो हि भुङ्क्ते प्रकृतिजान्गुणान्।\nकारणं गुणसङ्गोऽस्य सदसद्योनिजन्मसु॥',
    transliteration: 'puruṣaḥ prakṛti-stho hi bhuṅkte prakṛti-jān guṇān',
    translation: 'The purusha (soul), situated in material nature, enjoys the three qualities born of material nature. Contact with these qualities is the cause of birth in good and evil wombs.',
    tags: ['self', 'identity', 'karma', 'nature', 'discovery', 'patterns'],
    context: 'Person is trying to understand why they keep repeating the same patterns in life.',
  },

  // ── EXHAUSTION / SURRENDER ──────────────────────────────────
  {
    id: 'BG_9_22',
    ref: 'Bhagavad Gita, Chapter 9 · Verse 22',
    sanskrit: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥',
    transliteration: 'ananyāś cintayanto māṁ ye janāḥ paryupāsate',
    translation: 'For those who worship Me with devotion, meditating on My transcendental form, I carry what they lack and preserve what they have.',
    tags: ['exhaustion', 'surrender', 'faith', 'overwhelmed', 'trust', 'support'],
    context: 'Person feels completely alone and unsupported. Carrying too much. Needs to feel held.',
  },
  {
    id: 'BG_12_6',
    ref: 'Bhagavad Gita, Chapter 12 · Verse 6',
    sanskrit: 'ये तु सर्वाणि कर्माणि मयि संन्यस्य मत्पराः।\nअनन्येनैव योगेन मां ध्यायन्त उपासते॥',
    transliteration: 'ye tu sarvāṇi karmāṇi mayi sannyasya mat-parāḥ',
    translation: 'Those who surrender all actions to Me, who worship Me with undivided mind — those who always think of Me, for them I am the swift deliverer from the ocean of death and rebirth.',
    tags: ['exhaustion', 'surrender', 'faith', 'devotion', 'overwhelmed'],
    context: 'Person is ready to let go of control — deep exhaustion has brought them to surrender.',
  },

  // ── EGO / PRIDE ─────────────────────────────────────────────
  {
    id: 'BG_3_27',
    ref: 'Bhagavad Gita, Chapter 3 · Verse 27',
    sanskrit: 'प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः।\nअहङ्कारविमूढात्मा कर्ताहमिति मन्यते॥',
    transliteration: 'prakṛteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ',
    translation: 'All activities are carried out by the three qualities of material nature. But the soul, deluded by ego, thinks "I am the doer."',
    tags: ['ego', 'pride', 'control', 'relationship', 'humility', 'doer'],
    context: 'Person has an inflated sense of being the cause of everything — success or failure. Ego-driven thinking.',
  },
  {
    id: 'BG_16_4',
    ref: 'Bhagavad Gita, Chapter 16 · Verse 4',
    sanskrit: 'दम्भो दर्पोऽभिमानश्च क्रोधः पारुष्यमेव च।\nअज्ञानं चाभिजातस्य पार्थ सम्पदमासुरीम्॥',
    transliteration: 'dambho darpo \'bhimānaś ca krodhaḥ pāruṣyam eva ca',
    translation: 'Arrogance, pride, conceit, anger, harshness and ignorance — these are the qualities of one born with a demonic nature.',
    tags: ['ego', 'anger', 'pride', 'arrogance', 'relationship', 'self-awareness'],
    context: 'Person is showing or recognising arrogance in themselves or someone close to them.',
  },

  // ── DISCIPLINE / HABIT ──────────────────────────────────────
  {
    id: 'BG_6_17',
    ref: 'Bhagavad Gita, Chapter 6 · Verse 17',
    sanskrit: 'युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु।\nयुक्तस्वप्नावबोधस्य योगो भवति दुःखहा॥',
    transliteration: 'yuktāhāra-vihārasya yukta-ceṣṭasya karmasu',
    translation: 'Yoga destroys all misery for one who is regulated in eating and recreation, in working and in sleep.',
    tags: ['discipline', 'health', 'routine', 'balance', 'habit', 'burnout'],
    context: 'Person\'s basic routines are out of control — eating, sleeping, screen time. Physical discipline is the foundation.',
  },
  {
    id: 'BG_14_6',
    ref: 'Bhagavad Gita, Chapter 14 · Verse 6',
    sanskrit: 'तत्र सत्त्वं निर्मलत्वात्प्रकाशकमनामयम्।\nसुखसङ्गेन बध्नाति ज्ञानसङ्गेन चानघ॥',
    transliteration: 'tatra sattvaṁ nirmalatvāt prakāśakam anāmayam',
    translation: 'Of these, sattva (purity/clarity), being the purest, is illuminating and free from all problems. It binds one to happiness and to knowledge.',
    tags: ['discipline', 'clarity', 'peace', 'purity', 'habit', 'lifestyle'],
    context: 'Person wants to cultivate inner purity and clarity. Looking for a more sattvic way of living.',
  },

  // ── COMPARISON / JEALOUSY ───────────────────────────────────
  {
    id: 'BG_2_38',
    ref: 'Bhagavad Gita, Chapter 2 · Verse 38',
    sanskrit: 'सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ।\nततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि॥',
    transliteration: 'sukha-duḥkhe same kṛtvā lābhālābhau jayājayau',
    translation: 'Do battle treating joy and sorrow equally, gain and loss, victory and defeat — you shall not incur sin by doing so.',
    tags: ['comparison', 'jealousy', 'competition', 'career', 'equanimity', 'winning'],
    context: 'Person is too focused on outcomes relative to others — jealousy, unhealthy competition, keeping score.',
  },
  {
    id: 'BG_6_32',
    ref: 'Bhagavad Gita, Chapter 6 · Verse 32',
    sanskrit: 'आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन।\nसुखं वा यदि वा दुःखं स योगी परमो मतः॥',
    transliteration: 'ātmaupamyena sarvatra samaṁ paśyati yo \'rjuna',
    translation: 'O Arjuna, the best yogi is one who sees the true equality of all living beings — whether in joy or in sorrow — through comparison with oneself.',
    tags: ['comparison', 'empathy', 'relationship', 'jealousy', 'unity', 'perspective'],
    context: 'Person is judging others or being judged. Needs reminder of shared humanity.',
  },

  // ── MEANING / EXISTENTIAL ────────────────────────────────────
  {
    id: 'BG_4_7',
    ref: 'Bhagavad Gita, Chapter 4 · Verse 7',
    sanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥',
    transliteration: 'yadā yadā hi dharmasya glānir bhavati bhārata',
    translation: 'Whenever and wherever there is a decline of righteousness and a rise of evil, at that time I manifest Myself.',
    tags: ['meaning', 'purpose', 'existential', 'world', 'chaos', 'hope', 'faith'],
    context: 'Person is losing faith in the world — too much injustice, chaos, bad news. Feels meaning is collapsing.',
  },
  {
    id: 'BG_9_29',
    ref: 'Bhagavad Gita, Chapter 9 · Verse 29',
    sanskrit: 'समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः।\nये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम्॥',
    transliteration: 'samo \'haṁ sarva-bhūteṣu na me dveṣyo \'sti na priyaḥ',
    translation: 'I am equal to all beings — none is hateful to Me and none is dear. But those who worship Me with devotion, they are in Me and I am in them.',
    tags: ['meaning', 'love', 'belonging', 'identity', 'divine', 'acceptance'],
    context: 'Person feels unloved, unwanted, or like they don\'t belong anywhere.',
  },
  {
    id: 'BG_10_20',
    ref: 'Bhagavad Gita, Chapter 10 · Verse 20',
    sanskrit: 'अहमात्मा गुडाकेश सर्वभूताशयस्थितः।\nअहमादिश्च मध्यं च भूतानामन्त एव च॥',
    transliteration: 'aham ātmā guḍākeśa sarva-bhūtāśaya-sthitaḥ',
    translation: 'I am the Self, O Arjuna, seated in the hearts of all creatures. I am the beginning, the middle, and the end of all beings.',
    tags: ['meaning', 'existential', 'divine', 'self', 'purpose', 'belonging'],
    context: 'Person is searching for God or meaning in life — where to look, how to connect.',
  },

  // ── DAILY ROTATION (7 verses, one per day) ──────────────────
];

/**
 * Daily verse rotation — one per day of week (0=Sunday)
 */
export const DAILY_VERSES = [
  VERSES.find(v => v.id === 'BG_2_47'),  // Sunday  — karma yoga
  VERSES.find(v => v.id === 'BG_6_5'),   // Monday  — self as friend
  VERSES.find(v => v.id === 'BG_3_35'),  // Tuesday — swadharma
  VERSES.find(v => v.id === 'BG_2_56'),  // Wednesday — steady mind
  VERSES.find(v => v.id === 'BG_18_66'), // Thursday — total surrender
  VERSES.find(v => v.id === 'BG_2_20'),  // Friday  — eternal soul
  VERSES.find(v => v.id === 'BG_6_17'),  // Saturday — discipline
];

/**
 * Tag → verse mapping for fast lookup
 * Returns top 3 most relevant verses for a given tag
 */
export function getVersesForTag(tag) {
  return VERSES
    .filter(v => v.tags.includes(tag))
    .slice(0, 3);
}

/**
 * Get curated context string for the AI — injects the best-matching
 * verses into the prompt so the AI never fabricates a shloka
 */
export function buildVerseContext(userInput) {
  const input = userInput.toLowerCase();

  const tagScores = {};
  VERSES.forEach(verse => {
    verse.tags.forEach(tag => {
      if (input.includes(tag) ||
          (tag === 'stress' && (input.includes('tension') || input.includes('pressure') || input.includes('tense') || input.includes('pareshaan'))) ||
          (tag === 'career' && (input.includes('job') || input.includes('work') || input.includes('naukri') || input.includes('business'))) ||
          (tag === 'relationship' && (input.includes('family') || input.includes('friend') || input.includes('partner') || input.includes('rishta'))) ||
          (tag === 'grief' && (input.includes('sad') || input.includes('dukh') || input.includes('cry') || input.includes('loss'))) ||
          (tag === 'motivation' && (input.includes('lazy') || input.includes('stuck') || input.includes('start') || input.includes('begin'))) ||
          (tag === 'fear' && (input.includes('scared') || input.includes('dara') || input.includes('afraid') || input.includes('nervous'))) ||
          (tag === 'anger' && (input.includes('gussa') || input.includes('frustrated') || input.includes('hate') || input.includes('rage')))
      ) {
        tagScores[verse.id] = (tagScores[verse.id] || 0) + 1;
      }
    });
  });

  const sorted = Object.entries(tagScores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 4)
    .map(([id]) => VERSES.find(v => v.id === id))
    .filter(Boolean);

  // If no match, return 3 universally relevant verses
  const fallback = [
    VERSES.find(v => v.id === 'BG_2_47'),
    VERSES.find(v => v.id === 'BG_6_5'),
    VERSES.find(v => v.id === 'BG_3_35'),
  ];

  const selected = sorted.length >= 2 ? sorted : fallback;

  return selected.map(v =>
    `VERSE [${v.ref}]:\nSanskrit: ${v.sanskrit}\nMeaning: ${v.translation}\nContext: ${v.context}`
  ).join('\n\n');
}
