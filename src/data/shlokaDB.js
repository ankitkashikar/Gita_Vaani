/**
 * GITA VAANI — Complete Offline Shloka Database
 * ================================================
 * Every shloka has a FULL guidance response built-in.
 * Zero API calls. Zero cost. Works instantly.
 * 
 * Structure per shloka:
 *  keywords   — words that trigger this shloka (Hindi + English + Hinglish)
 *  ref        — Chapter & Verse reference
 *  sanskrit   — Original Devanagari
 *  translation — English meaning
 *  responses  — Full guru response in all 3 languages
 *    .hinglish
 *    .hindi  
 *    .english
 *      .reflection  — empathetic opening
 *      .bridge      — connect verse to their situation
 *      .steps[]     — 3 practical steps
 *      .takeaway    — one powerful closing line
 */

export const SHLOKA_DB = [

  // ═══════════════════════════════════════════════
  // STRESS & ANXIETY
  // ═══════════════════════════════════════════════
  {
    id: 'stress_01',
    category: 'stress',
    keywords: [
      'stress','anxiety','tension','pareshaan','worried','worry',
      'tension','dar','nervous','chain nahi','rest nahi','pressure',
      'overwhelmed','thaka','exhausted','burden','bojh','panic',
      'ghabrahat','restless','calm nahi','shanti nahi'
    ],
    ref: 'Bhagavad Gita · Chapter 2, Verse 14',
    sanskrit: 'मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥',
    translation: 'The contact of senses with objects gives rise to cold and heat, pleasure and pain — they come and go, they are impermanent. Bear them patiently, O Arjuna.',
    responses: {
      hinglish: {
        reflection: 'Yaar, jo tum feel kar rahe ho na — ye bahut real hai. Aur ye sirf tumhare saath nahi ho raha. Duniya ke sabse brave log bhi isi jagah khade hue the jahan tum ho abhi.',
        bridge: 'Krishna ne ye baat Arjuna ko tab kahi thi jab wo bilkul toot chuka tha. Battlefield pe. Krishna ne kaha — ye jo dard hai, ye pain hai, ye temporary hai. Hamesha nahi rahega. Jaise sardi ke baad garmi aati hai, waise ye bhi guzar jayega.',
        steps: [
          'Abhi ek kaam karo — 5 baar gehri saans lo. Sirf itna. Body ko signal do ki danger nahi hai.',
          'Jo cheez sabse zyada stress de rahi hai — usse kagaz pe likho. Likhne se dimaag halka hota hai.',
          'Aaj ek chhoti cheez karo jo tumhare control mein hai. Sirf ek. Baaki kal ke liye chhod do.'
        ],
        takeaway: 'Ye waqt bhi guzar jayega — kyunki sab kuch guzar jaata hai.'
      },
      hindi: {
        reflection: 'Jo तुम महसूस कर रहे हो, वो बिल्कुल सच है। और तुम अकेले नहीं हो इस दर्द में। जीवन के सबसे मजबूत लोग भी इस जगह से गुज़रे हैं।',
        bridge: 'कृष्ण ने अर्जुन को यह तब कहा जब वो पूरी तरह टूट चुका था। कृष्ण ने कहा — ये सुख-दुख, ये तकलीफ़ें, ये सब अस्थायी हैं। जैसे मौसम बदलता है, वैसे ये वक़्त भी बदलेगा।',
        steps: [
          'अभी सिर्फ एक काम करो — पाँच गहरी साँसें लो। शरीर को संकेत दो कि सब ठीक है।',
          'जो सबसे ज़्यादा परेशान कर रहा है — उसे कागज़ पर लिखो। लिखने से मन हल्का होता है।',
          'आज एक छोटी सी चीज़ करो जो तुम्हारे हाथ में है। बस एक।'
        ],
        takeaway: 'यह वक़्त भी गुज़र जाएगा — क्योंकि हर चीज़ गुज़रती है।'
      },
      english: {
        reflection: "What you're feeling right now is completely real. And you're not alone in it — even the bravest people in history have stood exactly where you're standing.",
        bridge: "Krishna said this to Arjuna when he was completely broken — on the battlefield, unable to move. Krishna's message was simple: this pain, this pressure, it's not permanent. It comes and it goes, like seasons.",
        steps: [
          'Right now, just take 5 deep breaths. Nothing else. Signal your body that you are safe.',
          'Write down the one thing stressing you most. Just writing it out releases mental pressure.',
          'Do one small thing today that is within your control. Just one. Leave the rest for tomorrow.'
        ],
        takeaway: 'This too shall pass — because everything passes.'
      }
    }
  },

  // ═══════════════════════════════════════════════
  // CAREER & PURPOSE
  // ═══════════════════════════════════════════════
  {
    id: 'career_01',
    category: 'career',
    keywords: [
      'career','job','naukri','work','kaam','confused','lost',
      'direction','path','kya karu','what to do','purpose','goal',
      'future','stuck','aage nahi','promotion','success','fail',
      'business','startup','profession','college','padhai','study',
      'salary','paise','money','income','achievement'
    ],
    ref: 'Bhagavad Gita · Chapter 2, Verse 47',
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
    translation: 'You have the right to perform your duty, but never to its fruits. Let not the fruit of action be your motive, nor let your attachment be to inaction.',
    responses: {
      hinglish: {
        reflection: 'Dekho beta, ye confusion jo tum feel kar rahe ho career mein — ye weakness nahi hai. Ye actually ek sign hai ki tum seriously soch rahe ho apni life ke baare mein. Bahut log toh sochtey hi nahi.',
        bridge: 'Ye duniya ka sabse mashoor shloka hai — aur ye tab kaha gaya tha jab Arjuna bilkul wahi feel kar raha tha jo tum abhi feel kar rahe ho. Krishna ne kaha: kaam karo, result ki chinta mat karo. Iska matlab lazy rehna nahi hai — iska matlab hai itni mehnat karo ki result ki zarurat hi na pade.',
        steps: [
          'Aaj ka kaam aaj karo — sirf aaj pe focus karo. Kal ki planning kal karenge.',
          'Ek skill choose karo jo tum improve karna chahte ho — aur sirf 20 minute roz usse do.',
          'Apni success ki definition khud likho — doosron ki definition pe mat jao.'
        ],
        takeaway: 'Kaam itna achha karo ki tumhe result maangna na pade.'
      },
      hindi: {
        reflection: 'जो confusion तुम career को लेकर महसूस कर रहे हो — ये कमज़ोरी नहीं, बल्कि ये एक अच्छा संकेत है। इसका मतलब है तुम अपनी ज़िंदगी को लेकर गंभीर हो।',
        bridge: 'यही वो श्लोक है जो कृष्ण ने तब कहा जब अर्जुन अपने रास्ते पर खड़ा था और समझ नहीं पा रहा था क्या करे। कृष्ण ने कहा — काम करो, फल की चिंता मत करो। मेहनत इतनी करो कि नतीजे खुद-ब-खुद आएं।',
        steps: [
          'आज का काम आज पूरा करो — सिर्फ आज पर ध्यान दो।',
          'एक skill चुनो जो तुम सीखना चाहते हो — रोज़ सिर्फ 20 मिनट उसे दो।',
          'अपनी सफलता की परिभाषा खुद लिखो — दूसरों की नकल मत करो।'
        ],
        takeaway: 'इतना अच्छा काम करो कि नतीजे माँगने की ज़रूरत न पड़े।'
      },
      english: {
        reflection: "The career confusion you're feeling isn't weakness — it's actually a sign that you're thinking seriously about your life. Most people never do.",
        bridge: "This is the most famous verse in the Gita — spoken when Arjuna was exactly where you are. Krishna's message: do your work with full dedication, and stop obsessing over the outcome. Not because results don't matter — but because when you work without anxiety, you actually perform better.",
        steps: [
          "Focus only on today's work — not next month, not next year. Just today.",
          'Pick one skill you want to improve. Give it just 20 minutes every day.',
          'Write your own definition of success — not someone else\'s.'
        ],
        takeaway: 'Work so well that results come looking for you.'
      }
    }
  },

  // ═══════════════════════════════════════════════
  // RELATIONSHIPS
  // ═══════════════════════════════════════════════
  {
    id: 'relation_01',
    category: 'relationship',
    keywords: [
      'relationship','rishta','family','pyaar','love','breakup',
      'fight','jhagda','argument','conflict','hurt','dil dukha',
      'partner','wife','husband','boyfriend','girlfriend','friend',
      'dost','betrayal','dhoka','trust','vishwas','loneliness',
      'akela','alone','parents','mummy','papa','siblings','bhai','behen',
      'marriage','shaadi','divorce','toxic'
    ],
    ref: 'Bhagavad Gita · Chapter 12, Verse 13',
    sanskrit: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥',
    translation: 'One who has no hatred toward any being, who is friendly and compassionate to all, free from ego and possessiveness, equal in joy and sorrow, forgiving — such a person is very dear.',
    responses: {
      hinglish: {
        reflection: 'Yaar, rishton ka dard sabse gehra hota hai. Kisi bhi cheez se zyada. Aur jo tum feel kar rahe ho — wo perfectly valid hai. Dil ka dard dikhna chahiye.',
        bridge: 'Krishna ne ye verse tab diya jab baat aayi ki ek accha insaan kaisa hota hai. Unhone kaha — jo dusron se nafrat nahi karta, jo forgive kar sakta hai, jo apne ego ko side rakh sakta hai — wahi sachhi shanti paata hai. Mushkil hai, lekin yahi rasta hai.',
        steps: [
          'Jo hurt hua hai — usay feel karo fully. Rok mat lo. Ro lo agar zarurat ho.',
          'Ek kaam karo — apne aap se poochho: "Is situation mein meri kya role thi?" Honestly.',
          'Forgiveness sirf doosre ke liye nahi hoti — apne liye hoti hai. Ek step us taraf lo.'
        ],
        takeaway: 'Jo tum doosron ko maafi dete ho, wo tumhare apne bojh ko halka karta hai.'
      },
      hindi: {
        reflection: 'रिश्तों का दर्द सबसे गहरा होता है। और जो तुम महसूस कर रहे हो — वो बिल्कुल सच है। दिल का दर्द छुपाने की ज़रूरत नहीं।',
        bridge: 'कृष्ण ने यह श्लोक तब कहा जब उन्होंने बताया कि एक अच्छा इंसान कैसा होता है। उन्होंने कहा — जो माफ कर सकता है, जो अपना अहंकार छोड़ सकता है, जो दूसरों से नफ़रत नहीं करता — वही सच्ची शांति पाता है।',
        steps: [
          'जो दर्द है — उसे पूरी तरह महसूस करो। रोको मत। रोना हो तो रोओ।',
          'खुद से पूछो — इस situation में मेरी भूमिका क्या थी? ईमानदारी से।',
          'माफ़ी सिर्फ दूसरे के लिए नहीं — अपने लिए है। एक छोटा क़दम उस तरफ उठाओ।'
        ],
        takeaway: 'जब तुम किसी को माफ़ करते हो — असल में तुम खुद को आज़ाद करते हो।'
      },
      english: {
        reflection: "The pain in relationships cuts deeper than anything else. And what you're feeling right now is completely valid. You don't need to pretend it doesn't hurt.",
        bridge: "Krishna described the qualities of a truly peaceful person — and at the top of the list was: no hatred, compassion for all, and the ability to forgive. Not because the other person deserves it — but because YOU deserve peace.",
        steps: [
          'Feel the pain fully. Don\'t suppress it. Cry if you need to — it releases more than you think.',
          'Ask yourself honestly: what was my role in this situation? No blame, just honesty.',
          'Take one small step toward forgiveness — not for them, but for your own peace.'
        ],
        takeaway: 'When you forgive someone, you are actually freeing yourself.'
      }
    }
  },

  // ═══════════════════════════════════════════════
  // MOTIVATION & LAZINESS
  // ═══════════════════════════════════════════════
  {
    id: 'motivation_01',
    category: 'motivation',
    keywords: [
      'motivation','lazy','aalsi','procrastinate','start','begin',
      'karna chahta','nahi ho raha','discipline','habit','routine',
      'exercise','gym','study','padhai','productive','productivity',
      'distraction','phone','social media','time waste','focus',
      'kuch nahi kar raha','bore','boredom','energy nahi','thaka'
    ],
    ref: 'Bhagavad Gita · Chapter 3, Verse 8',
    sanskrit: 'नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।\nशरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः॥',
    translation: 'Do your prescribed duty, for action is better than inaction. Even the maintenance of your body cannot be accomplished without action.',
    responses: {
      hinglish: {
        reflection: 'Ek baat bolunga — aur ye thoda tough lagega sunne mein. Jo tum "motivation dhundh rahe ho" — wo exist nahi karta. Motivation feeling nahi hai jo pehle aati hai. Wo feeling hai jo kaam shuru karne ke BAAD aati hai.',
        bridge: 'Krishna ne ek simple baat kahi — kuch bhi na karna, kaam karne se bura hai. Matlab: galat direction mein chalna bhi, khade rehne se behtar hai. Kyunki chalte chalte tum apna rasta dhundh lete ho. Khade rehne se kuch nahi milta.',
        steps: [
          'Abhi — is second — ek cheez karo jo 2 minute mein ho sake. Sirf shuru karo.',
          'Phone ko doosre kamre mein rakh do agle 30 minute ke liye. Bas itna.',
          'Aaj ke liye sirf 3 kaam likho jo karne hain. Poori list nahi — sirf 3.'
        ],
        takeaway: 'Motivation kaam shuru karne se aati hai — kaam shuru karne ke liye nahi.'
      },
      hindi: {
        reflection: 'एक सच्ची बात — "motivation" कोई जादुई feeling नहीं है जो पहले आती है। वो feeling है जो काम शुरू करने के बाद आती है।',
        bridge: 'कृष्ण ने कहा — कुछ न करना, कुछ करने से बुरा है। यानी गलत दिशा में चलना भी खड़े रहने से बेहतर है। क्योंकि चलते-चलते तुम रास्ता खोज लेते हो।',
        steps: [
          'अभी — इस पल — कोई एक काम करो जो 2 मिनट में हो सके।',
          'फ़ोन को अगले 30 मिनट के लिए दूसरे कमरे में रखो।',
          'आज के लिए सिर्फ 3 काम लिखो। पूरी list नहीं — बस 3।'
        ],
        takeaway: 'Motivation काम शुरू करने के बाद आती है — पहले नहीं।'
      },
      english: {
        reflection: "Here's a hard truth — motivation is not something that comes before you start. It's a feeling that comes AFTER you begin. Waiting for motivation is the trap.",
        bridge: "Krishna said something simple but powerful: action is better than inaction. Even moving in the wrong direction is better than standing still — because movement gives you feedback, standing still gives you nothing.",
        steps: [
          'Right now — this second — do one thing that takes 2 minutes. Just start.',
          'Put your phone in another room for the next 30 minutes. Just that one thing.',
          'Write down only 3 tasks for today. Not a full list — just 3.'
        ],
        takeaway: 'Motivation follows action — it never precedes it.'
      }
    }
  },

  // ═══════════════════════════════════════════════
  // FEAR & OVERTHINKING
  // ═══════════════════════════════════════════════
  {
    id: 'fear_01',
    category: 'fear',
    keywords: [
      'fear','dara','scared','afraid','dar','overthink','overthinking',
      'soch','negative thoughts','what if','future','kal','kal kya hoga',
      'uncertainty','insecurity','confidence','self doubt','believe',
      'failure','fail','galat','mistake','decision','faisla',
      'confused','nervous','hesitate','judge','log kya kahenge'
    ],
    ref: 'Bhagavad Gita · Chapter 2, Verse 20',
    sanskrit: 'न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥',
    translation: 'The soul is never born, nor does it die. It has not come into being and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.',
    responses: {
      hinglish: {
        reflection: 'Tum jo fear feel kar rahe ho — wo completely normal hai. Lekin ek baat notice karo: tum apne future ke baare mein soch soch ke present ko kharaab kar rahe ho. Jo hua nahi hai usse dara rahe ho.',
        bridge: 'Krishna ne Arjuna ko remind karaya ki jo tum sach mein ho — wo indestructible hai. Koi bhi failure, koi bhi rejection, koi bhi judgment tumhare core ko nahi toda sakta. Ye sirf situations hain — tum situations nahi ho.',
        steps: [
          'Abhi poochho apne aap se: "Kya ye dar real hai ya sirf meri imagination hai?"',
          'Worst case scenario likho — aur phir poochho: "Kya main us situation mein survive kar sakta hoon?" Almost always — haan.',
          'Ek chhota sa scary kaam aaj karo. Sirf ek. Confidence wahan se aata hai.'
        ],
        takeaway: 'Tum se zyada strong kuch nahi — agar tum khud pe believe karo.'
      },
      hindi: {
        reflection: 'जो डर तुम महसूस कर रहे हो — वो बिल्कुल स्वाभाविक है। लेकिन ग़ौर करो: तुम जो हुआ नहीं उससे डर रहे हो। भविष्य की कल्पना से।',
        bridge: 'कृष्ण ने अर्जुन को याद दिलाया — तुम्हारा असली स्वरूप अटल है। कोई भी failure, कोई भी rejection तुम्हें तोड़ नहीं सकती। ये सब situations हैं — तुम situations नहीं हो।',
        steps: [
          'खुद से पूछो — "क्या यह डर सच है या सिर्फ मेरी कल्पना?"',
          'Worst case scenario लिखो — फिर पूछो: "क्या मैं उस situation में survive कर सकता हूँ?" जवाब लगभग हमेशा हाँ है।',
          'आज एक छोटा डरावना काम करो। सिर्फ एक। Confidence वहीं से आता है।'
        ],
        takeaway: 'तुमसे ज़्यादा मज़बूत कुछ नहीं — अगर तुम खुद पर भरोसा करो।'
      },
      english: {
        reflection: "The fear you're feeling is completely normal. But notice this: you're suffering from something that hasn't happened yet. You're afraid of your own imagination of the future.",
        bridge: "Krishna reminded Arjuna of his true nature — indestructible, eternal. No failure, no rejection, no judgment can touch who you really are. These are situations you're passing through — they are not you.",
        steps: [
          'Ask yourself: "Is this fear real, or is it my imagination running ahead?"',
          'Write your worst case scenario. Then ask: "Could I survive that?" Almost always — yes.',
          'Do one small scary thing today. Just one. That\'s where confidence comes from.'
        ],
        takeaway: 'Nothing is stronger than you — if you choose to believe in yourself.'
      }
    }
  },

  // ═══════════════════════════════════════════════
  // GRIEF & LOSS
  // ═══════════════════════════════════════════════
  {
    id: 'grief_01',
    category: 'grief',
    keywords: [
      'grief','sad','dukh','rona','cry','loss','kho diya','death',
      'maut','gaya','chala gaya','miss','yaad','heartbreak',
      'broken','toot gaya','pain','dard','alone','akela',
      'empty','khali','depressed','depression','hopeless','umeed nahi',
      'koi nahi','nobody','meaningless','kya fayda','give up'
    ],
    ref: 'Bhagavad Gita · Chapter 18, Verse 66',
    sanskrit: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥',
    translation: 'Abandon all varieties of dharma and simply surrender unto Me alone. I shall deliver you from all sinful reactions. Do not fear.',
    responses: {
      hinglish: {
        reflection: 'Tum bahut thak gaye ho. Main feel kar sakta hoon ye. Itna bojh uthaya hai tumne. Aur shayad tumhe laga hoga ki ye dard kabhi nahi jayega — lekin main tumse seedha bolunga: jayega. Aaj nahi, kal nahi — lekin jayega.',
        bridge: 'Ye Gita ka aakhri aur sabse personal shloka hai — "Charama Shloka". Krishna ne ye tab kaha jab sab kuch bol diya tha. Unhone kaha: sab chhod do. Sirf surrender karo. Main sambhaalunga. Matlab — kabhi kabhi sabse brave kaam ye hota hai ki hum keh dein: "Main ab akele nahi sambhal sakta. Mujhe madad chahiye."',
        steps: [
          'Aaj sirf ek kaam karo — kisi ek insaan ko call karo jis pe trust karte ho. Sirf baat karo.',
          'Khud se vaada karo — aaj raat theek se so. Neend bohot kuch theek karti hai.',
          'Kal subah uthke sirf ek chhoti cheez karo jo tumhe achhi lagti ho. Sirf ek.'
        ],
        takeaway: 'Madad maangna kamzori nahi — sabse bada sahas hai.'
      },
      hindi: {
        reflection: 'तुम बहुत थक गए हो। इतना बोझ उठाया है तुमने। और शायद लग रहा है कि यह दर्द कभी नहीं जाएगा। लेकिन सच यह है — जाएगा। आज नहीं, कल नहीं — लेकिन ज़रूर जाएगा।',
        bridge: 'यह गीता का सबसे गहरा श्लोक है। कृष्ण ने कहा — सब छोड़ो, बस मेरी शरण आ जाओ, मैं संभाल लूँगा। कभी-कभी सबसे बहादुरी का काम यही होता है कि हम कह दें — "अब अकेले नहीं संभल रहा।"',
        steps: [
          'आज एक काम करो — किसी एक इंसान को call करो जिस पर भरोसा है। बस बात करो।',
          'आज रात ठीक से सोओ। नींद बहुत कुछ ठीक कर देती है।',
          'कल सुबह एक छोटी सी चीज़ करो जो तुम्हें अच्छी लगती है। बस एक।'
        ],
        takeaway: 'मदद माँगना कमज़ोरी नहीं — सबसे बड़ा साहस है।'
      },
      english: {
        reflection: "You are exhausted. I can feel that. You've been carrying so much. And maybe it feels like this pain will never end — but I want to tell you honestly: it will. Not today, not tomorrow — but it will.",
        bridge: "This is the last and most personal verse of the Gita — the Charama Shloka. Krishna said: abandon everything and just surrender to me. I will take care of you. Sometimes the bravest thing we can do is say: 'I can't carry this alone anymore.'",
        steps: [
          'Today, do just one thing — call one person you trust. Just talk.',
          'Sleep well tonight. Rest heals more than we realise.',
          'Tomorrow morning, do one small thing that makes you feel like yourself.'
        ],
        takeaway: 'Asking for help is not weakness — it is the greatest courage.'
      }
    }
  },

  // ═══════════════════════════════════════════════
  // ANGER
  // ═══════════════════════════════════════════════
  {
    id: 'anger_01',
    category: 'anger',
    keywords: [
      'anger','gussa','krodh','frustrated','frustration','irritated',
      'irritation','annoyed','furious','rage','fight','jhagda',
      'argument','hate','nafrat','revenge','badla','unfair',
      'injustice','annyay','cheated','dhoka','betrayed','hurt',
      'angry','mad','pissed','control nahi','react'
    ],
    ref: 'Bhagavad Gita · Chapter 2, Verse 63',
    sanskrit: 'क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥',
    translation: 'From anger comes delusion, from delusion loss of memory, from loss of memory destruction of intelligence, and from destruction of intelligence one falls down.',
    responses: {
      hinglish: {
        reflection: 'Gussa feel ho raha hai — aur shayad wo gussa sahi bhi hai. Kuch cheezein hoti hain jo genuinely unfair hoti hain. Tumhara reaction galat nahi hai. Lekin ab important ye hai ki tum is gusse ke saath kya karte ho.',
        bridge: 'Krishna ne ek chain batai — gussa → confusion → galat decision → nuksan. Ye chain tumhare saath hoti hai, mere saath hoti hai, sabke saath hoti hai. Gusse mein liye gaye decisions hamesha baad mein pachtaate hain. Isliye pehle gusse ko handle karo — phir situation ko.',
        steps: [
          'Abhi ek kaam karo — room se niklo. Bahar jao. 10 minute walk karo. Body ko reset karo.',
          'Jab tak dil ki dhadkan normal na ho — koi bhi message mat bhejo, koi bhi call mat karo.',
          'Likhlo jo feel ho raha hai — kagaz pe. Doosre insaan ko nahi — kagaz ko batao.'
        ],
        takeaway: 'Gusse mein uthaya hua kadam hamesha peeche le jaata hai.'
      },
      hindi: {
        reflection: 'गुस्सा आ रहा है — और शायद वो गुस्सा सही भी है। कुछ चीज़ें सच में नाइंसाफ़ होती हैं। लेकिन अब ज़रूरी है कि इस गुस्से के साथ तुम क्या करते हो।',
        bridge: 'कृष्ण ने एक chain बताई — गुस्सा → भ्रम → गलत फ़ैसला → नुकसान। यह chain हम सब के साथ होती है। गुस्से में लिए गए फ़ैसले हमेशा बाद में पछताते हैं।',
        steps: [
          'अभी कमरे से निकलो। बाहर जाओ। 10 मिनट टहलो। शरीर को reset करो।',
          'जब तक दिल की धड़कन सामान्य न हो — कोई message मत भेजो, कोई call मत करो।',
          'जो feel हो रहा है — कागज़ पर लिखो। दूसरे इंसान को नहीं — कागज़ को बताओ।'
        ],
        takeaway: 'गुस्से में उठाया हुआ क़दम हमेशा पीछे ले जाता है।'
      },
      english: {
        reflection: "You're angry — and maybe that anger is completely justified. Some things are genuinely unfair. Your reaction isn't wrong. But now what matters is what you do with this anger.",
        bridge: "Krishna described a chain reaction: anger → confusion → wrong decisions → destruction. This happens to all of us. Decisions made in anger almost always create regret. So handle the anger first — then handle the situation.",
        steps: [
          'Right now — leave the room. Go outside. Walk for 10 minutes. Reset your body.',
          'Do not send any message or make any call until your heartbeat is back to normal.',
          'Write what you\'re feeling on paper. Not to the person — to the paper.'
        ],
        takeaway: 'A step taken in anger almost always takes you backward.'
      }
    }
  },

  // ═══════════════════════════════════════════════
  // SELF DISCOVERY
  // ═══════════════════════════════════════════════
  {
    id: 'self_01',
    category: 'self',
    keywords: [
      'self','khud','identity','kaun hoon','who am i','purpose',
      'meaning','zindagi','life','spiritual','soul','aatma',
      'inner','andar','discover','jaanna','understand','samajhna',
      'meditation','dhyan','peace','shanti','happiness','khushi',
      'values','believe','faith','vishwas','god','bhagwan','truth'
    ],
    ref: 'Bhagavad Gita · Chapter 6, Verse 5',
    sanskrit: 'उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥',
    translation: 'Let a man lift himself by his own self alone; let him not lower himself, for the self alone is the friend of the self, and the self alone is the enemy of the self.',
    responses: {
      hinglish: {
        reflection: 'Ye question jo tum poochh rahe ho — "Main kaun hoon?" — ye duniya ka sabse important question hai. Aur bahut kam log itni himmat rakhte hain ki ye poochhein. Tum pehle se hi sahi raste pe ho.',
        bridge: 'Krishna ne kaha — tum apne khud ke sabse acche dost bhi ho sakte ho, aur sabse bade dushman bhi. Ye doosron pe depend nahi karta. Ye sirf tumhare apne thoughts aur choices pe depend karta hai. Tumhari zindagi tumhare haath mein hai — literally.',
        steps: [
          'Roz 5 minute akele baitho — bina phone ke. Sirf apne saath. Shuru mein awkward lagega — theek hai.',
          'Ek diary shuru karo. Roz sirf 3 lines likho — aaj kya feel kiya. Slowly pattern dikhega.',
          'Ek cheez identify karo jab tum sabse zyada "khud" lagte ho — aur us cheez ko zyada time do.'
        ],
        takeaway: 'Tum apne sabse acche dost ban sakte ho — ya sabse bade dushman. Choice tumhari hai.'
      },
      hindi: {
        reflection: 'जो सवाल तुम पूछ रहे हो — "मैं कौन हूँ?" — यह दुनिया का सबसे ज़रूरी सवाल है। और बहुत कम लोग इतनी हिम्मत रखते हैं कि यह पूछें।',
        bridge: 'कृष्ण ने कहा — तुम अपने खुद के सबसे अच्छे मित्र भी हो सकते हो, और सबसे बड़े शत्रु भी। यह दूसरों पर नहीं, तुम्हारे अपने विचारों और choices पर निर्भर करता है।',
        steps: [
          'रोज़ 5 मिनट अकेले बैठो — बिना फ़ोन के। सिर्फ अपने साथ।',
          'एक diary शुरू करो। रोज़ सिर्फ 3 lines — आज क्या feel किया।',
          'एक काम identify करो जब तुम सबसे ज़्यादा "खुद" लगते हो — उसे ज़्यादा समय दो।'
        ],
        takeaway: 'तुम अपने सबसे अच्छे दोस्त बन सकते हो — या सबसे बड़े दुश्मन। Choice तुम्हारी है।'
      },
      english: {
        reflection: "The question you're asking — 'Who am I?' — is the most important question in the world. And very few people have the courage to ask it. You're already on the right path.",
        bridge: "Krishna said: you can be your own best friend, or your own worst enemy. It doesn't depend on others — it depends entirely on your own thoughts and choices. Your life is literally in your own hands.",
        steps: [
          'Sit alone for 5 minutes every day — no phone. Just with yourself. It will feel awkward at first.',
          'Start a journal. Write just 3 lines daily — what you felt today. Patterns will emerge.',
          'Identify one thing that makes you feel most like yourself — and give it more time.'
        ],
        takeaway: 'You can be your own best friend or your own worst enemy. The choice is yours.'
      }
    }
  }
]

// ═══════════════════════════════════════════════════════
// MATCHING ENGINE — finds the best shloka for any input
// ═══════════════════════════════════════════════════════

export function findBestShloka(userInput) {
  const input = userInput.toLowerCase().trim()
  const scores = {}

  SHLOKA_DB.forEach(shloka => {
    let score = 0
    shloka.keywords.forEach(keyword => {
      if (input.includes(keyword.toLowerCase())) {
        score += keyword.length > 5 ? 3 : 2
      }
    })
    if (score > 0) scores[shloka.id] = score
  })

  const sorted = Object.entries(scores).sort(([,a],[,b]) => b - a)

  if (sorted.length === 0) {
    // Default to stress shloka if no match
    return SHLOKA_DB[0]
  }

  const bestId = sorted[0][0]
  return SHLOKA_DB.find(s => s.id === bestId)
}

export function buildOfflineResponse(shloka, language, userInput) {
  const lang = language || 'hinglish'
  const response = shloka.responses[lang] || shloka.responses.hinglish

  return {
    reflection: response.reflection,
    verse_ref: shloka.ref,
    verse_sanskrit: shloka.sanskrit,
    verse_translation: shloka.translation,
    gita_bridge: response.bridge,
    steps: response.steps,
    takeaway: response.takeaway,
    question: userInput,
    language: lang,
    savedAt: Date.now(),
    offline: true
  }
}

// Categories for chip display
export const CATEGORIES = [
  { label: 'Stress & Anxiety',   icon: '🌊', id: 'stress',       query: 'stress anxiety tension pareshaan' },
  { label: 'Career Confusion',   icon: '🧭', id: 'career',       query: 'career job confused lost direction' },
  { label: 'Rishte / Relations', icon: '💛', id: 'relationship', query: 'relationship rishta fight conflict hurt' },
  { label: 'Motivation',         icon: '🔥', id: 'motivation',   query: 'motivation lazy procrastinate start discipline' },
  { label: 'Dar / Fear',         icon: '🌀', id: 'fear',         query: 'fear dar scared overthinking' },
  { label: 'Dukh / Grief',       icon: '🕊️', id: 'grief',        query: 'grief sad dukh loss rona' },
  { label: 'Krodh / Anger',      icon: '🌋', id: 'anger',        query: 'anger gussa krodh frustrated' },
  { label: 'Self Discovery',     icon: '🪷', id: 'self',         query: 'self identity purpose meaning spiritual' },
]
