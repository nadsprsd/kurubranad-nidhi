/**
 * CENTRAL CONTENT CONFIGURATION
 * ---------------------------------------------------------------------------
 * Editable copy for every route lives here so pages stay presentational.
 * Anything referencing rates, limits, fees, or regulatory approvals is a
 * placeholder pending client + legal sign-off — see
 * CLIENT_APPROVAL_CHECKLIST.md before publishing.
 */

export const homeContent = {
  hero: {
    eyebrow: "Kurumbranad Gold Loan · Perambra, Kerala",
    heading: "Your gold, your family's next step forward.",
    body: "For generations, families in and around Perambra have turned gold into opportunity — school fees, a small business, a wedding, a medical need. Kurumbranad Nidhi Limited exists to make that step simple, respectful, and close to home.",
    primaryCta: { label: "Enquire Now", href: "/contact" },
    secondaryCta: { label: "Explore Gold Loan", href: "/gold-loan" },
    imageAlt:
      "A Kerala gold loan officer carefully weighing a customer's jewellery on a digital scale inside a well-lit branch office",
  },
  stats: {
    // Sourced from the client's corporate profile PDF and branch signage —
    // real figures, not placeholders. TODO(CLIENT): reconfirm branch count
    // if the Chalode branch's opening status has changed since the PDF was written.
    heading: "Kurumbranad at a glance",
    items: [
      { label: "Established", value: "2020" },
      { label: "Branches", value: "5" },
      { label: "Districts served", value: "Kozhikode & Kannur" },
      { label: "Structure", value: "Nidhi Company" },
    ],
  },
  team: {
    heading: "Meet our directors",
    body: "Kurumbranad Nidhi Limited is led by a four-member board with backgrounds spanning banking, risk management, and export trade.",
    cta: { label: "Meet the full board", href: "/about#board" },
  },
  testimonials: {
    heading: "What our members say",
    // Real ratings as of the screenshots supplied: 4.7/5 on Google, 4.5/5
    // on Justdial (5 votes). These are a snapshot, not a live feed — update
    // this line periodically, since ratings change over time and we don't
    // have a live API pulling them automatically.
    body: "Rated 4.7 on Google and 4.5 on Justdial by members who've visited our branches.",
    items: [
      {
        // Adapted from a real Google review by Ragheesh Sreerag (5 stars,
        // Google) — lightly edited only to remove a reference to
        // Kurumbranad as a "bank" (it's a Nidhi company, not a bank),
        // otherwise the customer's own words.
        quote:
          "I came to them at the very start of my business and had a great experience — a lot of support. Thank you, Kurumbranad team.",
        name: "Ragheesh Sreerag",
        area: "Perambra",
        note: "Adapted from a Google review",
      },
      {
        // Real Justdial review by Anvish Kumar (5.0), originally in
        // Malayalam: "മികച്ച സംവിധാനം കൂടുതൽ തുക door step വളരെ ഉപകാരപ്രദം"
        quote: "Great service, a higher loan amount, and doorstep convenience — very helpful.",
        name: "Anvish Kumar",
        area: "Justdial review",
        note: "Translated from Malayalam",
      },
    ],
  },
  services: {
    heading: "Services for our members",
    body: "Kurumbranad Nidhi Limited offers a small set of member-focused financial services, each explained plainly and offered subject to eligibility, documentation, company policy, and applicable regulations.",
    items: [
      {
        title: "Gold Loan",
        description:
          "Short-term, gold-backed lending against jewellery, with transparent valuation and secure custody.",
        href: "/gold-loan",
      },
      {
        title: "Savings",
        description:
          "Simple savings options designed for members building a financial cushion over time.",
        href: "/services",
      },
      {
        title: "Recurring Deposit",
        description:
          "Disciplined, monthly saving for members working toward a specific goal.",
        href: "/services",
      },
      {
        title: "Fixed Deposit",
        description:
          "A fixed-term deposit option for members who prefer a defined tenure.",
        href: "/services",
      },
    ],
  },
  whyUs: {
    heading: "Why members choose Kurumbranad",
    body: "From one branch in Perambra in 2020 to five branches across Kozhikode and Kannur districts today, growth has followed trust rather than the other way around.",
    points: [
      {
        title: "Local, face-to-face service",
        description:
          "Branches across Perambra, Kannur, and Kozhikode districts mean members deal with people, not a call centre.",
      },
      {
        title: "Plain-language terms",
        description:
          "We explain every step of the gold loan process before you commit to anything.",
      },
      {
        title: "Careful handling of your gold",
        description:
          "Professional valuation and secure custody follow documented internal procedures — see our Compliance page.",
      },
    ],
  },
  process: {
    heading: "How a gold loan enquiry works",
    steps: [
      {
        title: "Share your enquiry",
        description:
          "Tell us what you need using the contact form, phone, or WhatsApp — no documents are uploaded online.",
      },
      {
        title: "Speak with our team",
        description:
          "A member of our team follows up to explain eligibility, documentation, and next steps.",
      },
      {
        title: "Visit the branch",
        description:
          "Jewellery valuation, documentation, and disbursal happen in person at our office.",
      },
      {
        title: "Repay and renew",
        description:
          "Repayment and renewal terms are explained clearly and confirmed in writing at disbursal.",
      },
    ],
  },
  trust: {
    heading: "Trust and compliance",
    body: "We are a Nidhi company serving eligible members, not a bank or NBFC. Our compliance page sets out our legal structure, KYC process, and grievance redressal.",
    cta: { label: "Read our compliance information", href: "/compliance" },
  },
  serviceArea: {
    heading: "Five branches across Kozhikode and Kannur",
    body: "Kurumbranad Gold Loan now serves members from five branch locations. Visit whichever is closest to you, or reach out online first — see our Contact page for full addresses.",
    areas: ["Perambra", "Thazhe Chovva, Kannur", "Keezhur, Iritty", "Balussery, Kozhikode", "Chalode, Kannur"],
  },
  faqPreview: {
    heading: "Common questions",
    items: [
      {
        question: "Do I need to be a member to apply for a gold loan?",
        answer:
          "Gold loan services are offered to eligible members, subject to eligibility, documentation, company policy, and applicable regulations. Our team can explain membership requirements when you enquire.",
      },
      {
        question: "Can I complete the process entirely online?",
        answer:
          "No. We do not collect Aadhaar, PAN, OTPs, bank credentials, or financial documents online. Enquiries start online or by phone, but valuation, documentation, and disbursal happen in person at our office.",
      },
      {
        question: "How is my gold valued?",
        answer:
          "Valuation follows our documented internal procedure, explained to you in person before any loan is finalised. See our Gold Loan and Compliance pages for more detail.",
      },
    ],
  },
  contactCta: {
    heading: "Have a question about your gold loan?",
    body: "Reach out and our team in Perambra will get back to you — no pressure, no obligation.",
    cta: { label: "Enquire Now", href: "/contact" },
  },
};

export const aboutContent = {
  hero: {
    heading: "About Kurumbranad Nidhi Limited",
    body: "Kurumbranad Gold Loan is a gold-backed lending institution that provides financial assistance to customers by accepting gold ornaments as collateral. Our objective is to offer gold loan services tailored to members' financial needs, while prioritising trust, transparency, prompt service, and responsible financial transactions.",
    imageAlt: "Kurumbranad Gold Loan branch signage in Perambra, Kerala",
  },
  video: {
    heading: "A message from our director",
    body: "Praveen A.V., Director of Kurumbranad Nidhi Limited, on what the company stands for.",
  },
  facts: {
    heading: "Verified company facts",
    body: "Sourced directly from Kurumbranad's own corporate profile.",
    items: [
      { label: "Legal structure", value: "Nidhi company" },
      { label: "Year established", value: "2020" },
      { label: "First branch", value: "Perambra, Kerala" },
      { label: "Branches today", value: "5, across Kozhikode & Kannur districts" },
    ],
  },
  vision: {
    heading: "Vision",
    body: "To be a world-class financial institution affording comprehensive and ready access to high-quality financial services and building long-term partnerships with our members. Our success is measured not only in economic terms but by the respect, trust, and credibility we earn.",
  },
  mission: {
    heading: "Mission",
    body: "To achieve complete customer satisfaction through efficient, professional, and courteous service — and to keep developing practical financial solutions that meet our members' expectations and improve their income and socio-economic standing.",
  },
  coreValues: {
    heading: "Core values",
    items: ["Integrity", "Goals", "Innovation", "Quality", "Excellence"],
  },
  memberFocus: {
    heading: "A member-centric approach",
    body: "We aim to treat every member enquiry as a conversation, not a transaction — explaining terms clearly and never asking for more than is required to serve you responsibly.",
  },
  leadership: {
    heading: "Board of Directors",
    id: "board",
    body: "Kurumbranad Nidhi Limited is led by a four-member board with backgrounds in export trade, risk management, and banking.",
  },
};

export const servicesContent = {
  hero: {
    heading: "Member services",
    body: "The services below are confirmed as offered by Kurumbranad, per branch signage and corporate materials — offered to eligible members, subject to eligibility, documentation, company policy, and applicable regulations. Specific rates, limits, and tenures are placeholders pending client and legal approval.",
  },
  services: [
    {
      title: "Savings",
      description:
        "A straightforward savings option for members building financial security over time.",
      docsNote: "Identity and address proof (Aadhaar card) and PAN card, verified at the branch.",
    },
    {
      title: "Recurring Deposit",
      description:
        "Regular monthly deposits toward a fixed future goal, with terms confirmed at account opening.",
      docsNote: "Identity and address proof (Aadhaar card) and PAN card, verified at the branch.",
    },
    {
      title: "Fixed Deposit",
      description:
        "A defined-tenure deposit for members who prefer certainty over the deposit period.",
      docsNote: "Identity and address proof (Aadhaar card) and PAN card, verified at the branch.",
    },
    {
      title: "Mortgage Loan",
      description:
        "Lending secured against property, offered to eligible members subject to documentation and company policy.",
      docsNote: "Identity and address proof (Aadhaar card) and PAN card, verified at the branch.",
    },
    {
      title: "Gold Loan",
      description:
        "Gold-backed lending against jewellery, with in-person valuation and secure custody.",
      docsNote: "See the Gold Loan page for the full process and required documents.",
    },
  ],
  disclaimer:
    "All services are offered to eligible members only, subject to eligibility, documentation, company policy, and applicable regulations. Kurumbranad Nidhi Limited is not a bank or NBFC, and no service described here should be understood as a guaranteed-return investment or government-backed scheme.",
};

export const goldLoanContent = {
  hero: {
    heading: "Gold Loan",
    body: "A gold loan lets you borrow against jewellery you already own, with your gold held securely until repayment. Terms below are explained in general terms only — final rates and limits are confirmed in person and pending client/legal approval.",
    imageAlt:
      "Close-up of a bank officer's hands carefully examining gold jewellery next to a digital weighing scale and valuation paperwork",
  },
  intro: {
    heading: "How gold-backed lending works",
    body: "Instead of an unsecured loan, you offer gold jewellery as security. Once your gold is valued and documentation is complete, funds are made available, subject to eligibility, documentation, company policy, and applicable regulations.",
  },
  benefits: {
    heading: "What members can expect",
    body: "Key features of our gold loan service, drawn from our own corporate profile and branch marketing.",
    items: [
      "Fast loan processing",
      "Transparent procedures",
      "Professional gold valuation",
      "Secure gold custody",
      "Clear loan terms",
      "Customer-friendly service",
      "Repayment monitoring",
      "Doorstep gold loan service in select areas — our team can come to you",
      "Gold loan balance transfer from other banks or financial institutions, often at improved value",
      "Interest calculated only for the number of days your loan is actually held",
    ],
  },
  process: {
    heading: "Step-by-step process",
    steps: [
      { title: "Enquire", description: "Submit an enquiry online, by phone, or by WhatsApp." },
      { title: "Visit the branch", description: "Bring your jewellery and ID documents for in-person valuation." },
      { title: "Valuation", description: "Our team assesses your gold using documented procedures and explains the outcome." },
      { title: "Documentation", description: "Complete the required paperwork; terms are confirmed in writing." },
      { title: "Disbursal", description: "Funds are disbursed per company policy after documentation is complete." },
      { title: "Repayment or renewal", description: "Repay per the agreed schedule, or discuss renewal terms with our team." },
    ],
  },
  documents: {
    heading: "Documents you may need",
    body: "The following are accepted as standard identity and KYC documents. These are verified in person at the branch — we never collect or upload them through this website.",
    items: ["Aadhaar card", "PAN card"],
  },
  valuationCustody: {
    heading: "Valuation and custody",
    body: "Jewellery is valued in person by our branch team and held securely for the duration of the loan, following our internal custody procedure.",
  },
  repayment: {
    heading: "Repayment and renewal",
    body: "Repayment and renewal terms are explained clearly and confirmed in writing when your loan is disbursed. Our branch team is happy to discuss flexible renewal options as your loan comes due.",
  },
  charges: {
    heading: "Charges and terms",
    body: "Indicative interest rates for our gold loan range from 16% to 20% per annum for a 6-month tenure. The exact applicable rate, along with any processing charges, is confirmed at the branch based on the loan amount and scheme selected, and is subject to eligibility, documentation, company policy, and applicable regulations.",
  },
  faqs: [
    {
      question: "Is my gold safe while the loan is active?",
      answer:
        "Yes — jewellery offered as security is held under documented custody procedures for the duration of the loan. See our Compliance page for more detail.",
    },
    {
      question: "What happens if I can't repay on time?",
      answer:
        "If a repayment is missed, our branch team will get in touch to discuss your options before any further action is taken, in line with company policy and applicable regulations.",
    },
    {
      question: "Can I renew my gold loan?",
      answer:
        "In most cases, yes. Renewal terms depend on your specific loan and are discussed with our branch team when you're ready to renew.",
    },
  ],
};

export const corporateProfileContent = {
  hero: {
    heading: "Corporate Profile",
    body: "This page summarises Kurumbranad Nidhi Limited's corporate profile for general information only. It is not an investor offer, solicitation, or guarantee of any kind.",
  },
  disclaimer:
    "This corporate profile is provided for general information only and does not constitute an offer, solicitation, or invitation to invest. Any figures relating to growth, expansion, or future plans are indicative and subject to change.",
  overview: {
    heading: "Company overview",
    body: "Kurumbranad Gold Loan began operations in Perambra, Kozhikode, in 2020, with the aim of understanding customers' financial needs and providing a loan facility that is quickly and easily accessible against gold security. Starting on a limited scale, the institution has grown steadily as it earned the trust and support of its members — expanding from one branch to five across Kozhikode and Kannur districts within six years.",
  },
  growthStory: {
    heading: "Our branches",
    // TODO(CLIENT): confirm the Chalode branch's current status before publishing —
    // see the note in config/branches.ts.
    body: "Each branch opening has been marked by the local Panchayat or Municipality leadership, reflecting Kurumbranad's community-first approach.",
  },
  structure: {
    heading: "Organisational structure",
    body: "Kurumbranad Nidhi Limited is governed by a four-member Board of Directors — see the About page for full profiles. Day-to-day branch operations are overseen through Area Managers and Divisional Managers.",
  },
  futurePlans: {
    heading: "Future plans (indicative)",
    body: "Kurumbranad continues to grow its branch network within Kozhikode and Kannur districts, most recently with the Chalode branch. Any further expansion will be announced here as it is confirmed — this is indicative only, not a commitment.",
  },
  downloadPlaceholder: {
    heading: "Downloadable corporate profile",
    body: "A downloadable PDF version of this corporate profile will be added here once a final, approved document is supplied by the client.",
    available: false,
  },
};

export const complianceContent = {
  hero: {
    heading: "Compliance & Governance",
    body: "This page explains, in general terms, how Kurumbranad Nidhi Limited approaches legal structure, verification, and member protection. All content below is subject to verification and applicable law, and is pending final legal review.",
  },
  legalStructure: {
    heading: "Legal structure",
    body: "Kurumbranad Nidhi Limited operates as a Nidhi company, incorporated under the Companies Act, 2013 (CIN: U65999KL2020PLN063491).",
  },
  statutory: {
    heading: "Statutory & governance information",
    body: "Kurumbranad Nidhi Limited is registered under CIN U65999KL2020PLN063491. Individual branches also operate under state-issued licence numbers — for example, licence 32120375095 (Thazhe Chovva, Kannur) and licence 32120394445 (Keezhur, Iritty).",
  },
  kyc: {
    heading: "KYC and verification",
    body: "We follow a standard KYC process using accepted identity documents, including Aadhaar card and PAN card. These are verified in person at the branch — we do not collect or upload these documents through this website.",
  },
  internalControls: {
    heading: "Internal controls",
    body: "Internal financial and operational controls are maintained in line with applicable Nidhi company regulations. Further detail is available on request at any branch.",
  },
  valuationCustody: {
    heading: "Gold valuation and custody",
    body: "Gold offered as loan security is professionally valued and held under secure custody procedures for the duration of the loan.",
  },
  grievance: {
    heading: "Grievance redressal",
    id: "grievance",
    body: "If you have an unresolved concern about any of our services, please contact our grievance officer directly at 9061 554 575. We aim to acknowledge and address every concern promptly.",
  },
  privacyPolicy: {
    heading: "Privacy Policy",
    id: "privacy-policy",
    body: "Kurumbranad Nidhi Limited respects your privacy. Information submitted through our enquiry form — your name, phone number, and enquiry details — is used only to respond to your enquiry, and is never sold or shared with third parties for marketing purposes. We do not collect Aadhaar, PAN, OTPs, bank credentials, passwords, or financial documents through this website; these are handled only in person at a branch, as part of our standard KYC process. A more detailed Privacy Policy is being finalised with our legal advisers and will be published here shortly.",
  },
  terms: {
    heading: "Terms of Use",
    id: "terms",
    body: "By using this website, you agree to use it only for lawful purposes and to provide accurate information when submitting an enquiry. Kurumbranad Nidhi Limited may update this website and its content at any time without prior notice. A more detailed Terms of Use document is being finalised with our legal advisers and will be published here shortly.",
  },
  policiesDownloads: {
    heading: "Policies and downloads",
    body: "Approved policy documents will be listed here once supplied by the client.",
  },
};

export const contactContent = {
  hero: {
    heading: "Contact Us",
    body: "Reach out with questions about savings, deposits, or a gold loan enquiry — or find the Kurumbranad branch nearest you below. We do not collect Aadhaar, PAN, OTPs, bank credentials, or financial documents through this form.",
  },
  formNote:
    "Fields marked required must be completed. We'll never ask for sensitive documents or codes through this form — that happens only in person at a branch.",
  branches: {
    heading: "Our branches",
    body: "Five branches across Kozhikode and Kannur districts, and growing.",
  },
};
