export interface PracticeArea {
  id: string;
  title: string;
  category: 'writs' | 'civil' | 'criminal' | 'corporate';
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  keyServices: string[];
  remedies: string;
  urgentAvailable?: boolean;
}

export interface CaseHighlight {
  id: string;
  title: string;
  category: string;
  forum: string;
  challenge: string;
  strategy: string;
  outcome: string;
  statute: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  content: string;
  caseType: string;
  location: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  timeline: string;
  desc: string;
  litigantAction: string;
}

export interface ChecklistItem {
  category: string;
  items: string[];
  tips: string;
}

export const ADVOCATE_INFO = {
  name: "P. N. Mishra",
  fullName: "Padum Nath Mishra",
  designation: "Advocate | High Court of Judicature at Allahabad, Lucknow Bench",
  court: "High Court of Judicature at Allahabad, Lucknow Bench",
  chamber: "Chamber No. Block E - 407, High Court Lucknow Bench",
  barCouncil: "Bar Council of Uttar Pradesh",
  enrollmentCity: "Lucknow, Uttar Pradesh",
  tagline: "Committed to Justice, Dedicated to Excellence.",
  bio: "Advocate P. N. Mishra (Padum Nath Mishra) is a dedicated litigator and strategic legal consultant practicing actively before the High Court of Judicature at Allahabad, Lucknow Bench, alongside various District & Sessions Courts and Revenue Tribunals in Uttar Pradesh. Known for meticulous legal drafting, persuasive oral advocacy, and deep procedural command, Advocate Mishra handles high-stakes Constitutional Writ Petitions, Civil & Property Disputes, Criminal Trials, Bail Matters, Revenue Claims, and Commercial Advisory. Combining relentless client dedication with uncompromising judicial ethics, he ensures every litigant receives robust representation and strategic legal clarity.",
  mission: "To uphold the majesty of law by delivering unyielding advocacy, strategic representation, and ethical guidance to every litigant seeking justice.",
  vision: "To set benchmarks of excellence in judicial representation, ensuring accessible, transparent, and result-driven legal solutions for individuals and enterprises alike.",
  coreValues: [
    { title: "Judicial Integrity & Ethics", desc: "Strict adherence to the Advocates Act 1961, Bar Council standards, and complete attorney-client privilege." },
    { title: "Strategic Pleading Mastery", desc: "Meticulous evidentiary examination, exhaustive legal research, and persuasive petition drafting." },
    { title: "Direct Advocate Counsel", desc: "Personalized attention with direct client-to-advocate discussions without bureaucratic intermediaries." },
    { title: "Courtroom Preparedness", desc: "Rigorous case rehearsal, precedent benchmarking, and formidable oral submissions before the bench." }
  ],
  phones: ["+91 6392892957", "+91 9452665549"],
  rawPhones: ["916392892957", "919452665549"],
  email: "advpadumnathmishra@gmail.com",
  officeAddress: "Chamber No. Block E - 407, High Court, Lucknow, Uttar Pradesh, India - 226010",
  officeHours: "Monday – Saturday: 9:00 AM – 7:30 PM (Sunday by Prior Appointment)",
  stats: {
    yearsExperience: "3+",
    casesHandled: "350+",
    satisfiedClients: "250+",
    chamberLocation: "Block E - 407"
  }
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "writ-petitions",
    title: "High Court Writ Petitions",
    category: "writs",
    iconName: "Award",
    shortDesc: "Constitutional remedies under Article 226 & 227 before the High Court Lucknow Bench.",
    fullDesc: "Formulating and pleading extraordinary constitutional writs including Mandamus against government inaction, Certiorari to quash unlawful administrative orders, Habeas Corpus, and Service Writs challenging wrongful departmental actions.",
    keyServices: ["Article 226/227 High Court Writs", "Mandamus against Govt Departments", "Service Law & Wrongful Suspension Writs", "Quashing Illegal Demolition / Recovery Notices"],
    remedies: "Articles 226 & 227 of the Constitution of India",
    urgentAvailable: true
  },
  {
    id: "civil-litigation",
    title: "Civil Litigation & Injunctions",
    category: "civil",
    iconName: "Scale",
    shortDesc: "Comprehensive representation in civil recovery suits, injunctions, and High Court appeals.",
    fullDesc: "Expert trial and appellate litigation covering declaration suits, temporary and perpetual injunctions under Order 39 CPC, specific performance of contracts, money recovery suits, and First Appeals (FA / FAFO) before the High Court.",
    keyServices: ["Stay Orders & Injunctions (Order 39)", "Money Recovery Suits", "Specific Performance of Contracts", "Civil Appeals (FA / FAFO / RSA)"],
    remedies: "Code of Civil Procedure, 1908 (CPC)",
    urgentAvailable: true
  },
  {
    id: "property-disputes",
    title: "Property & Revenue Litigation",
    category: "civil",
    iconName: "Home",
    shortDesc: "Resolving ancestral partition suits, land revenue disputes, and title conflicts in UP.",
    fullDesc: "Specialized representation before Revenue Courts (Tehsildar, SDO, Commissioner, Board of Revenue) and High Court in partition suits, Khatauni correction, boundary disputes, tenancy conflicts, and land acquisition claims under UP Revenue Code.",
    keyServices: ["Partition & Succession Suits", "UP Revenue Code 2006 Proceedings", "Khatauni & Land Record Declarations", "Illegal Possession & Eviction Actions"],
    remedies: "UP Revenue Code, 2006 & Specific Relief Act",
    urgentAvailable: false
  },
  {
    id: "criminal-defense",
    title: "Criminal Defense & Bail",
    category: "criminal",
    iconName: "ShieldAlert",
    shortDesc: "Aggressive defense in regular bail, anticipatory bail, trials, and quashing proceedings.",
    fullDesc: "Robust criminal counsel before Sessions Courts and Lucknow High Court for anticipatory bail, regular bail, Section 482 petitions for quashing arbitrary FIRs and charge-sheets, and criminal appeals against conviction.",
    keyServices: ["Anticipatory Bail Applications", "High Court Regular Bail Petitions", "FIR Quashing (Section 482 / BNSS)", "White Collar Financial Offense Defense"],
    remedies: "Bharatiya Nagarik Suraksha Sanhita (BNSS) / CrPC Section 482",
    urgentAvailable: true
  },
  {
    id: "cheque-bounce",
    title: "Cheque Bounce (Sec 138 NI Act)",
    category: "corporate",
    iconName: "Landmark",
    shortDesc: "Swift legal action and defense in cheque dishonor complaints under Section 138 NI Act.",
    fullDesc: "Drafting mandatory statutory demand notices, instituting criminal complaints before Judicial Magistrates, and formulating strategic defenses against fabricated cheque liability claims with compound interest recovery.",
    keyServices: ["Statutory Demand Legal Notice Drafting", "Section 138 Criminal Complaint Filing", "Trial Cross-Examination Defense", "Pre-Trial Out-of-Court Settlement"],
    remedies: "Negotiable Instruments Act, 1881",
    urgentAvailable: false
  },
  {
    id: "family-matrimonial",
    title: "Matrimonial & Family Law",
    category: "civil",
    iconName: "Users",
    shortDesc: "Discreet and empathetic handling of mutual consent divorce, custody, and maintenance.",
    fullDesc: "Protecting client dignity and rights in sensitive domestic disputes, including mutual consent divorce petitions, contested divorce trials, child custody, Section 125 CrPC maintenance claims, and domestic violence defense.",
    keyServices: ["Mutual Consent Divorce (Sec 13B)", "Child Custody & Guardianship", "Maintenance Petitions (Sec 125)", "Domestic Violence & 498A Defense"],
    remedies: "Hindu Marriage Act, 1955 & Family Courts Act",
    urgentAvailable: false
  },
  {
    id: "corporate-commercial",
    title: "Commercial Contracts & Corporate Law",
    category: "corporate",
    iconName: "Briefcase",
    shortDesc: "Vetting commercial agreements, partnership disputes, and corporate dispute resolution.",
    fullDesc: "Assisting business owners, startups, and enterprises with iron-clad commercial contracts, joint ventures, shareholder disputes, regulatory compliance, and Debt Recovery Tribunal (DRT) litigation.",
    keyServices: ["Commercial Contract Drafting & Vetting", "Partnership & Director Disputes", "DRT & SARFAESI Defense", "NCLT Commercial Insolvency Advisory"],
    remedies: "Companies Act, 2013 & Indian Contract Act",
    urgentAvailable: false
  },
  {
    id: "arbitration-adr",
    title: "Arbitration & Dispute Resolution",
    category: "corporate",
    iconName: "Gavel",
    shortDesc: "Domestic arbitration proceedings and interim relief under Arbitration Act.",
    fullDesc: "Representing commercial entities and contractors in arbitration proceedings under the Arbitration and Conciliation Act 1996, including Section 11 arbitrator appointments and Section 9 interim protection petitions before the High Court.",
    keyServices: ["Section 11 Arbitrator Appointment Petitions", "Section 9 Interim Measure Petitions", "Arbitral Award Enforcement (Sec 36)", "Commercial Settlement Mediation"],
    remedies: "Arbitration and Conciliation Act, 1996",
    urgentAvailable: true
  },
  {
    id: "consumer-protection",
    title: "Consumer Forum & Real Estate",
    category: "civil",
    iconName: "ShoppingBag",
    shortDesc: "Holding builders and service providers accountable for delays, negligence, and fraud.",
    fullDesc: "Filing consumer complaints before District Consumer Commissions, State Commission, and High Court for builder delays in real estate handover, medical negligence compensation, and insurance claim rejections.",
    keyServices: ["Builder Delay Compensation Complaints", "RERA & Consumer Commission Advocacy", "Medical Negligence Compensation", "Insurance Dispute Resolution"],
    remedies: "Consumer Protection Act, 2019 & RERA Act",
    urgentAvailable: false
  },
  {
    id: "legal-documentation",
    title: "Legal Deeds & Document Vetting",
    category: "civil",
    iconName: "FileText",
    shortDesc: "Drafting registered sale deeds, wills, power of attorney, and statutory legal notices.",
    fullDesc: "Comprehensive property and title search reports, drafting registered sale deeds, gift deeds, wills, trust deeds, General & Special Power of Attorney (GPA/SPA), and formal statutory legal notices with evidentiary rigor.",
    keyServices: ["30-Year Title Search Reports", "Registered Sale & Gift Deeds", "Wills & Family Settlements", "Pre-Litigation Statutory Legal Notices"],
    remedies: "Registration Act, 1908 & Transfer of Property Act",
    urgentAvailable: false
  }
];

export const HIGH_COURT_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Chamber Review & Strategy Assessment",
    timeline: "Day 1",
    desc: "Detailed examination of the lower court records, impugned orders, FIR copies, or revenue documents to identify jurisdictional grounds and constitutional remedies.",
    litigantAction: "Bring certified copies of impugned orders and original timeline documents."
  },
  {
    step: "02",
    title: "Petition Drafting & Affidavit Verification",
    timeline: "Day 2 – 3",
    desc: "Meticulous formulation of petition grounds, citation of Supreme Court & Allahabad High Court precedents, and drafting of supporting Vakalatnama and affidavits.",
    litigantAction: "Review and sign the petition draft, Vakalatnama, and notary affidavits."
  },
  {
    step: "03",
    title: "High Court Filing & Reporting Clearance",
    timeline: "Day 4",
    desc: "Official e-filing and physical presentation at the High Court Filing Counter. Tracking through the Stamp Reporter to cure technical defects and obtain case number.",
    litigantAction: "Case number and CNR (Case Record Number) provided to litigant."
  },
  {
    step: "04",
    title: "First Listing Before Motion Bench",
    timeline: "Day 5 – 7",
    desc: "Advocate P. N. Mishra appears before the designated High Court Bench for admission hearing, arguing forcefully for urgent interim stay or pre-arrest bail.",
    litigantAction: "Live updates provided immediately following court bench proceedings."
  },
  {
    step: "05",
    title: "Interim Relief / Notice & Pleadings Completion",
    timeline: "Subsequent Weeks",
    desc: "Obtaining certified copy of High Court order, serving court notices to government authorities or opposing parties, and filing Rejoinder Affidavits.",
    litigantAction: "Execution of interim orders with local police/administrative authorities."
  },
  {
    step: "06",
    title: "Final Hearing & Judicial Judgment",
    timeline: "Final Disposal",
    desc: "Comprehensive oral submissions during final argument listing leading to complete quashing, decree, bail confirmation, or writ mandamus execution.",
    litigantAction: "Receipt of final certified judgment order for compliance."
  }
];

export const DOCUMENT_CHECKLISTS: ChecklistItem[] = [
  {
    category: "High Court Writ Petitions (Art. 226/227)",
    items: [
      "Certified copy of the impugned government or administrative order",
      "Copy of previous representations made to authorities (with delivery proof)",
      "Identity proof and relevant service / tender / property ownership records",
      "Chronological sequence of events sheet signed by petitioner",
      "Vakalatnama duly executed"
    ],
    tips: "Ensure all annexures are clean, legible, and accompanied by Hindi-to-English translation if applicable."
  },
  {
    category: "Criminal Defense & Bail Petitions",
    items: [
      "Certified copy of First Information Report (FIR) and General Diary (GD) entry",
      "Certified rejection order from Sessions Court (mandatory for High Court bail)",
      "Copy of Charge-Sheet or Case Diary extracts (if already filed by police)",
      "Medical records, cross-complaint copies, or alibi evidence (if applicable)",
      "Surety details and residential identity proof"
    ],
    tips: "For anticipatory bail, file before any coercive police action or non-bailable warrant is executed."
  },
  {
    category: "Civil & Property Disputes",
    items: [
      "30-year revenue records (Khatauni, Khasra, and revenue map - Shajra)",
      "Registered Sale Deed, Gift Deed, or Family Partition Deed",
      "Certified copies of previous civil court orders, decrees, or revenue mutation",
      "Photographs or local commissioner inspection reports (if boundary dispute)",
      "Notices exchanged between parties prior to litigation"
    ],
    tips: "Always obtain updated Khatauni from Tehsil portal to demonstrate current recorded possession."
  },
  {
    category: "Section 138 Cheque Dishonor Cases",
    items: [
      "Original dishonored cheque (front and reverse sides)",
      "Bank return memo citing reason for dishonor (e.g. Funds Insufficient)",
      "Copy of Statutory Legal Demand Notice served within 30 days of dishonor",
      "Postal dispatch receipt and delivery tracking report from India Post",
      "Proof of underlying debt (invoice, promissory note, agreement)"
    ],
    tips: "Strict statutory limitation applies: legal notice must be dispatched within 30 days of bank memo."
  }
];

export const WHY_CHOOSE_US = [
  { icon: "UserCheck", title: "Direct Advocate Counsel", desc: "Your case is handled, strategized, and argued directly by Advocate P. N. Mishra without confusing go-betweens." },
  { icon: "Award", title: "High Court Procedural Mastery", desc: "Thorough command over Allahabad High Court Rules, writ jurisdictions, Section 482 petitions, and appellate briefs." },
  { icon: "Shield", title: "Strict Confidentiality", desc: "Complete attorney-client privilege guaranteed under the Indian Evidence Act for all discussions and documentation." },
  { icon: "DollarSign", title: "Ethical & Transparent Fees", desc: "Clear, predictable professional fee structure established beforehand with zero unexpected hidden retainers." },
  { icon: "Gavel", title: "Formidable Courtroom Presence", desc: "Rigorous evidentiary preparation and persuasive, precedent-backed oral submissions before High Court benches." },
  { icon: "Clock", title: "Proactive Case Updates", desc: "Prompt communication following every cause list listing, bench hearing, and interim order issuance." },
  { icon: "CheckCircle", title: "Bar Council Compliance", desc: "Strict adherence to the Advocates Act 1961 and Bar Council of India ethical codes governing professional conduct." },
  { icon: "Target", title: "Targeted Relief Strategy", desc: "Practical litigation roadmap focused on securing rapid interim stay orders, quashing, or sustainable settlements." }
];

export const CAREER_TIMELINE = [
  {
    year: "Academic Foundation",
    title: "Bachelor of Laws (LL.B.)",
    court: "Faculty of Law",
    desc: "Acquired formal jurisprudence training with dedicated honors focus in Constitutional Law, Code of Civil Procedure (CPC), and Criminal Jurisprudence."
  },
  {
    year: "Bar Enrollment",
    title: "Licensed Advocate Enrollment",
    court: "Bar Council of Uttar Pradesh",
    desc: "Formally enrolled with the Bar Council of Uttar Pradesh, authorized to practice and represent clients in all Courts, Tribunals, and Appellate Benches across India."
  },
  {
    year: "Chamber Practice",
    title: "High Court Chamber Establishment",
    court: "High Court Lucknow Bench (Block E - 407)",
    desc: "Established Chamber Block E-407 at the prestigious High Court Lucknow Bench campus, spearheading writ petitions, property partitions, and regular criminal defense."
  },
  {
    year: "Active Practice",
    title: "High Court Litigation & Counsel",
    court: "Allahabad High Court (Lucknow Bench) & District Courts",
    desc: "Actively representing 350+ contested matters across Constitutional Writs, Civil Injunctions, Regular Bails, Revenue Tribunals, and Corporate Advisory with prompt judicial relief."
  }
];

export const CASE_HIGHLIGHTS: CaseHighlight[] = [
  {
    id: "case-1",
    title: "Interim Stay on Unlawful Revenue Possession & Partition Decree",
    category: "Property & Revenue Law",
    forum: "High Court Lucknow Bench",
    challenge: "Client was unlawfully dispossessed of a 4-acre prime commercial land parcel through an ex-parte revenue mutation order obtained by fraudulent misrepresentation.",
    strategy: "Invoked High Court supervisory writ jurisdiction under Article 227 challenging blatant breach of natural justice, while filing Section 229B revenue partition counter-claims.",
    outcome: "High Court granted immediate status-quo order restraining third-party transfers, followed by lower court decree restoring 100% lawful title to our client.",
    statute: "UP Revenue Code & Art. 227 Constitution"
  },
  {
    id: "case-2",
    title: "Anticipatory Bail Secured in Commercial Dispute Allegation",
    category: "Criminal Defense",
    forum: "Sessions & High Court Lucknow",
    challenge: "Client faced imminent arrest under severe non-bailable fraud charges (Sections 420/406 IPC) maliciously instituted to enforce an incomplete civil contract.",
    strategy: "Demonstrated before the Bench that the dispute was strictly of a civil-contractual nature with zero prima facie criminal intent, citing authoritative Supreme Court precedents.",
    outcome: "High Court Lucknow granted anticipatory bail with comprehensive protection against custodial arrest, preserving client's personal liberty and reputation.",
    statute: "BNSS / Section 438 CrPC"
  },
  {
    id: "case-3",
    title: "Quashing of Arbitrary Departmental Suspension Order",
    category: "Constitutional & Service Writ",
    forum: "High Court of Judicature at Allahabad, Lucknow Bench",
    challenge: "Senior public sector employee placed under indefinite punitive suspension without inquiry or charge-sheet for over 14 months.",
    strategy: "Filed Writ Petition under Article 226 establishing violation of Article 14 and statutory service rules prohibiting prolonged indefinite suspension without formal inquiry.",
    outcome: "High Court quashed the suspension order, directing reinstatement with full consequential seniority benefits and arrears of salary.",
    statute: "Article 226 Constitution of India"
  },
  {
    id: "case-4",
    title: "Substantial Compensation Secured for Defective Real Estate Delivery",
    category: "Consumer Litigation",
    forum: "State Consumer Disputes Redressal Commission",
    challenge: "Real estate promoter defaulted on apartment handover by 4 years and attempted to impose arbitrary holding charges on purchaser.",
    strategy: "Instituted comprehensive consumer claim detailing deficiency of service and unfair trade practices with rigorous interest amortization tables.",
    outcome: "Forum ordered promoter to refund entire deposited sum along with 11% compound interest and ₹1.5 Lakh compensation for mental harassment.",
    statute: "Consumer Protection Act, 2019"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rajeswar Prasad Verma",
    role: "Retired Class-I Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    content: "Advocate P. N. Mishra handled my High Court service pension writ with absolute precision. His deep command over constitutional service rules and articulate argument before the bench got us a favorable stay in our very first hearing. Truly dependable!",
    caseType: "Writ Petition (Service Law)",
    location: "Lucknow"
  },
  {
    id: "t2",
    name: "Dr. Sunita Saxena",
    role: "Medical Practitioner & Clinic Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    content: "When an ancestral property title issue arose regarding our clinic in Gomti Nagar, Advocate Mishra drafted a water-tight civil petition. He is transparent, prompt with listing updates, and always available for direct discussion.",
    caseType: "Property Partition Suit",
    location: "Gomti Nagar, Lucknow"
  },
  {
    id: "t3",
    name: "Amitabh Srivastava",
    role: "Managing Director, Tech Logistics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    content: "Exceptional defense counsel! Advocate P. N. Mishra represented our firm in a wrongful commercial dispute filed by a vendor. His understanding of High Court arbitration petitions and commercial relief is unmatched.",
    caseType: "Commercial Defense",
    location: "Hazratganj, Lucknow"
  },
  {
    id: "t4",
    name: "Vikramaditya Singh",
    role: "Real Estate Enterprise Partner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    content: "We trust Advocate Padum Nath Mishra for all our high-value land title vetting and High Court stay representations. His drafting is sharp and leaves zero loopholes. Highly recommended advocate in Lucknow.",
    caseType: "Land Title & Revenue Writ",
    location: "Indira Nagar, Lucknow"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "property-law-guide",
    title: "Essential Legal Due Diligence Before Buying Property in Uttar Pradesh",
    category: "Property Law Guide",
    date: "July 2026",
    readTime: "5 min read",
    summary: "A practical legal checklist for 30-year Tehsil revenue record verification, Khatauni scrutiny, and non-encumbrance safeguards in UP.",
    content: [
      "Acquiring real estate in Uttar Pradesh requires rigorous pre-purchase legal verification to safeguard against fraudulent sales, undisclosed family partitions, and revenue encumbrances.",
      "1. Tehsil Revenue Records (Khatauni & Khasra): Always examine certified 30-year revenue history (Khatauni) at the Tehsil office to confirm the seller's recorded title is unencumbered and free from government acquisition proceedings.",
      "2. Encumbrance Certificate (EC): Secure an authentic 12 to 30-year EC from the Sub-Registrar Office to verify the property carries no active mortgage, civil court attachment, or registered charge.",
      "3. UP RERA & Local Development Authority Sanctions: In municipal boundaries like Lucknow (LDA), ensure the residential layout holds formal statutory approval and is registered under UP RERA.",
      "Consulting an experienced High Court advocate for comprehensive title vetting prior to issuing earnest token money protects your life savings from protracted litigation."
    ]
  },
  {
    id: "bail-procedure-guide",
    title: "Anticipatory Bail vs Regular Bail: Key Principles Before High Court",
    category: "Criminal Defense",
    date: "July 2026",
    readTime: "6 min read",
    summary: "Understanding constitutional protections under BNSS / CrPC, grounds for pre-arrest immunity, and procedural requirements before High Court benches.",
    content: [
      "Bail remains an indispensable constitutional safeguard embodying the established judicial maxim: 'Bail is the rule, jail is an exception'.",
      "Anticipatory Bail: Invoked when an individual carries reasonable apprehension of arrest in a non-bailable accusation. It provides protective pre-arrest immunity, allowing the individual to cooperate with investigation without undergoing custodial humiliation.",
      "Regular Bail: Sought post-arrest when the accused is in police or judicial remand.",
      "Key Judicial Considerations: In evaluating bail pleas, the High Court assesses prima facie nature of accusations, gravity of prescribed punishment, absence of flight risk, and whether dispute is predominantly civil-contractual in essence."
    ]
  },
  {
    id: "writ-jurisdiction-guide",
    title: "When Can You Approach High Court Under Article 226 for Writ Relief?",
    category: "High Court Procedure",
    date: "June 2026",
    readTime: "5 min read",
    summary: "How Article 226 writ petitions protect citizens against arbitrary government orders, police inaction, and administrative excesses.",
    content: [
      "The High Court's writ jurisdiction under Article 226 is one of the most powerful constitutional remedies available to citizens in India.",
      "1. Writ of Mandamus: Commands a public official or government department to discharge their mandatory statutory duty.",
      "2. Writ of Certiorari: Quashes an unlawful, arbitrary, or unconstitutional order passed by an administrative body or lower tribunal in excess of jurisdiction.",
      "3. Fundamental Pre-conditions: A petitioner must establish infringement of a fundamental or legal right, absence of an effective alternate statutory remedy, and absence of undue laches (delay).",
      "Our chamber formulates meticulous writ petitions before the Lucknow Bench for expeditious motion listing and urgent interim relief."
    ]
  },
  {
    id: "cheque-bounce-notice",
    title: "Mandatory Statutory Timelines Under Section 138 NI Act for Cheque Bounce",
    category: "Banking & Commercial",
    date: "June 2026",
    readTime: "4 min read",
    summary: "Why adhering strictly to 30-day and 15-day statutory windows is essential to preserve your legal right to file criminal proceedings.",
    content: [
      "Section 138 of the Negotiable Instruments Act provides a criminal recourse against cheque dishonor, but the law imposes inflexible statutory deadlines.",
      "1. Within 30 Days: You must dispatch a formal written statutory demand notice to the drawer within 30 days of receiving the bank memo of dishonor.",
      "2. 15 Days Grace Period: The drawer is granted 15 days from receipt of the notice to make payment of the cheque amount.",
      "3. 30 Days to File: If payment is not made within the 15-day window, the cause of action arises, and the criminal complaint must be filed before the Magistrate within the next 30 days.",
      "A professionally drafted legal notice is the vital evidentiary backbone of the entire prosecution."
    ]
  }
];

export const FAQS = [
  {
    q: "How can I book a direct consultation with Advocate P. N. Mishra?",
    a: "You can book a consultation directly through the booking form on this website, by calling our chamber helpline numbers (+91 6392892957 / +91 9452665549), or by sending an instant message via WhatsApp. We provide in-person chamber consultations at Block E-407, High Court Lucknow, as well as scheduled virtual consultations for outstation clients."
  },
  {
    q: "Where is the chamber located at High Court Lucknow?",
    a: "Our chamber is situated at Chamber No. Block E - 407, High Court of Judicature at Allahabad, Lucknow Bench campus, Lucknow, Uttar Pradesh. Please inform our office prior to arrival so chamber entry passes or visitor coordination can be arranged."
  },
  {
    q: "What is your consultation fee policy and case fee structure?",
    a: "We adhere strictly to Bar Council ethics and maintain complete fee transparency. Initial advisory fees are agreed upon beforehand. Case litigation fees depend on the court jurisdiction (High Court / District Court / Revenue Tribunal), scope of petition drafting, urgency of listing, and court hearings involved, with zero hidden costs."
  },
  {
    q: "What documents must I bring for my first legal consultation?",
    a: "Please carry all relevant case documents: certified copies of lower court orders/notices, revenue Khatauni/sale deeds (for property matters), FIR and charge-sheet copies (for criminal matters), and a chronological summary of facts. Having organized papers allows us to provide immediate, actionable legal counsel."
  },
  {
    q: "How fast can an urgent High Court stay or bail petition be listed?",
    a: "In matters involving imminent arrest, demolition, or unlawful dispossession, our chamber prepares and e-files petitions on high priority. Once technical defects are cleared with the reporting section, urgent matters can typically be listed before the High Court Motion Bench within 48 to 72 hours."
  },
  {
    q: "Are consultations strictly confidential under attorney-client privilege?",
    a: "Yes, absolutely. All communications, case briefs, and documents shared with Advocate P. N. Mishra and his chamber associates are governed by absolute confidentiality and statutory attorney-client privilege under Section 126 of the Indian Evidence Act."
  }
];
