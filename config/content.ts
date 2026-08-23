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
    eyebrow: "Kurubranad Gold Loan · Perambra, Kerala",
    heading: "Your gold, your family's next step forward.",
    body: "For generations, families in and around Perambra have turned gold into opportunity — school fees, a small business, a wedding, a medical need. Kurubranad Nidhi Limited exists to make that step simple, respectful, and close to home.",
    primaryCta: { label: "Enquire Now", href: "/contact" },
    secondaryCta: { label: "Explore Gold Loan", href: "/gold-loan" },
    imageAlt:
      "A Kerala gold loan officer carefully weighing a customer's jewellery on a digital scale inside a well-lit branch office",
  },
  stats: {
    // TODO(CLIENT): Every figure below is a placeholder. We do not publish
    // member counts, years of operation, branch counts, or loan volumes
    // until the client supplies and confirms the real numbers — inventing
    // statistics for a financial services company is not something we do,
    // even for placeholder/preview purposes.
    heading: "Kurubranad at a glance",
    items: [
      { label: "Members served", value: "TODO(CLIENT)" },
      { label: "Years in Perambra", value: "TODO(CLIENT)" },
      { label: "Branch location", value: "Perambra, Kerala" },
      { label: "Regulatory structure", value: "TODO(CLIENT)" },
    ],
  },
  leadership: {
    heading: "A message from our leadership",
    // TODO(CLIENT): Replace with a real quote, name, and designation from
    // an actual director/officer of the company, along with an approved
    // photograph. Nothing here is published until supplied and approved.
    quote:
      "TODO(CLIENT): A short, genuine message from a director or senior officer about why Kurubranad exists and what members can expect — in their own words.",
    name: "TODO(CLIENT): Name",
    designation: "TODO(CLIENT): Designation",
    imageAlt: "Portrait of a Kurubranad Nidhi Limited director — to be supplied by the client",
  },
  testimonials: {
    heading: "What our members say",
    body: "TODO(CLIENT): Real member testimonials will appear here once collected and approved. We do not publish invented reviews or quotes for a financial services company — every testimonial shown will be a genuine member's words, used with their permission.",
    // Structural placeholders only — swap each in once the client supplies
    // a real name, area, and quote (with the member's consent).
    items: [
      { quote: "TODO(CLIENT): Member testimonial to be collected.", name: "TODO(CLIENT)", area: "TODO(CLIENT)" },
      { quote: "TODO(CLIENT): Member testimonial to be collected.", name: "TODO(CLIENT)", area: "TODO(CLIENT)" },
      { quote: "TODO(CLIENT): Member testimonial to be collected.", name: "TODO(CLIENT)", area: "TODO(CLIENT)" },
    ],
  },
  services: {
    heading: "Services for our members",
    body: "Kurubranad Nidhi Limited offers a small set of member-focused financial services, each explained plainly and offered subject to eligibility, documentation, company policy, and applicable regulations.",
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
    heading: "Why members choose Kurubranad",
    body: "TODO(CLIENT): Replace with client-verified differentiators. No statistics, awards, or claims are published until confirmed.",
    points: [
      {
        title: "Local, face-to-face service",
        description:
          "Based in Perambra, we work with members in person — not through a call centre.",
      },
      {
        title: "Plain-language terms",
        description:
          "We explain every step of the gold loan process before you commit to anything.",
      },
      {
        title: "Careful handling of your gold",
        description:
          "Valuation and custody follow documented internal procedures — see our Compliance page.",
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
    body: "We are a Nidhi company serving eligible members, not a bank or NBFC. Our compliance page sets out our legal structure, KYC process, and grievance redressal — all pending final legal review before publication.",
    cta: { label: "Read our compliance information", href: "/compliance" },
  },
  serviceArea: {
    heading: "Serving Perambra and nearby areas",
    body: "TODO(CLIENT): Confirm the exact towns/panchayats served before publishing this list.",
    areas: [
      "Perambra",
      "TODO(CLIENT): Nearby area 2",
      "TODO(CLIENT): Nearby area 3",
      "TODO(CLIENT): Nearby area 4",
    ],
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
    heading: "About Kurubranad Nidhi Limited",
    body: "TODO(CLIENT): Replace with the client's verified company story. Do not publish founding narrative details until confirmed.",
    imageAlt:
      "Exterior view of a modest local office building in Perambra, Kerala, representative of a community financial services branch",
  },
  video: {
    heading: "Get to know Kurubranad",
    body: "TODO(CLIENT): A short video introduction will appear here once supplied.",
  },
  facts: {
    heading: "Verified company facts",
    body: "TODO(CLIENT): Every fact below must be supplied and verified by the client before publishing. Placeholders are shown for structure only.",
    items: [
      { label: "Legal structure", value: "TODO(CLIENT)" },
      { label: "Year established", value: "TODO(CLIENT)" },
      { label: "Registered office", value: "TODO(CLIENT)" },
      { label: "Regulatory registration", value: "TODO(CLIENT)" },
    ],
  },
  vision: {
    heading: "Vision",
    body: "TODO(CLIENT): Supply the company's approved vision statement.",
  },
  mission: {
    heading: "Mission",
    body: "TODO(CLIENT): Supply the company's approved mission statement.",
  },
  philosophy: {
    heading: "Operating philosophy",
    body: "TODO(CLIENT): Supply verified detail on how the company approaches lending, savings, and member service.",
  },
  memberFocus: {
    heading: "A member-centric approach",
    body: "We aim to treat every member enquiry as a conversation, not a transaction — explaining terms clearly and never asking for more than is required to serve you responsibly.",
  },
  leadership: {
    heading: "Leadership",
    body: "TODO(CLIENT): Leadership names, roles, and photographs to be supplied and approved by the client before publishing.",
  },
};

export const servicesContent = {
  hero: {
    heading: "Member services",
    body: "The services below are offered to eligible members, subject to eligibility, documentation, company policy, and applicable regulations. Rates, limits, and tenures are placeholders pending client and legal approval.",
  },
  services: [
    {
      title: "Savings",
      description:
        "A straightforward savings option for members building financial security over time.",
      docsNote:
        "TODO(CLIENT): List required documents and eligibility criteria.",
    },
    {
      title: "Recurring Deposit",
      description:
        "Regular monthly deposits toward a fixed future goal, with terms confirmed at account opening.",
      docsNote:
        "TODO(CLIENT): List required documents and eligibility criteria.",
    },
    {
      title: "Fixed Deposit",
      description:
        "A defined-tenure deposit for members who prefer certainty over the deposit period.",
      docsNote:
        "TODO(CLIENT): List required documents and eligibility criteria.",
    },
    {
      title: "Member Loan Services",
      description:
        "TODO(CLIENT): Describe permitted member loan services precisely as approved by legal/compliance.",
      docsNote:
        "TODO(CLIENT): List required documents and eligibility criteria.",
    },
    {
      title: "Gold Loan",
      description:
        "Gold-backed lending against jewellery, with in-person valuation and secure custody.",
      docsNote: "See the Gold Loan page for the full process and required documents.",
    },
  ],
  disclaimer:
    "All services are offered to eligible members only, subject to eligibility, documentation, company policy, and applicable regulations. Kurubranad Nidhi Limited is not a bank or NBFC, and no service described here should be understood as a guaranteed-return investment or government-backed scheme.",
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
    body: "TODO(CLIENT): Confirm each benefit below before publishing — no rate, speed, or limit claims are published without written client approval.",
    items: [
      "In-person, transparent valuation of your jewellery",
      "Documented custody procedures while your loan is active",
      "Plain-language explanation of terms before you commit",
      "TODO(CLIENT): Additional confirmed benefit",
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
    body: "TODO(CLIENT): Confirm the exact document list and eligibility criteria with compliance before publishing.",
    items: [
      "TODO(CLIENT): Identity proof accepted",
      "TODO(CLIENT): Address proof accepted",
      "TODO(CLIENT): Membership documentation, if applicable",
    ],
  },
  valuationCustody: {
    heading: "Valuation and custody",
    body: "Jewellery is valued in person using a documented internal procedure and stored securely for the duration of the loan. TODO(CLIENT): Confirm specific custody and insurance details with operations/compliance before publishing.",
  },
  repayment: {
    heading: "Repayment and renewal",
    body: "TODO(CLIENT): Repayment schedules, renewal terms, and any applicable charges must be supplied and approved before publishing. No figures are shown here pending that approval.",
  },
  charges: {
    heading: "Charges and terms",
    body: "TODO(CLIENT): Interest rates, processing charges, and other fees are not published until confirmed by the client and reviewed by legal/compliance counsel. All lending is subject to eligibility, documentation, company policy, and applicable regulations.",
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
        "TODO(CLIENT): Confirm the approved explanation of late-payment and auction procedures before publishing. This must be reviewed by legal/compliance counsel.",
    },
    {
      question: "Can I renew my gold loan?",
      answer:
        "Renewal options are discussed with our team based on your loan terms and company policy. TODO(CLIENT): Confirm renewal process detail.",
    },
  ],
};

export const corporateProfileContent = {
  hero: {
    heading: "Corporate Profile",
    body: "This page summarises Kurubranad Nidhi Limited's corporate profile for general information only. It is not an investor offer, solicitation, or guarantee of any kind.",
  },
  disclaimer:
    "This corporate profile is provided for general information only and does not constitute an offer, solicitation, or invitation to invest. Any figures relating to growth, expansion, or future plans are indicative and subject to change.",
  overview: {
    heading: "Company overview",
    body: "TODO(CLIENT): Supply the approved corporate-profile narrative to be rewritten into this section. Nothing is published here until the client provides source content.",
  },
  structure: {
    heading: "Organisational structure",
    body: "TODO(CLIENT): Supply verified organisational/governance structure.",
  },
  futurePlans: {
    heading: "Future plans (indicative)",
    body: "TODO(CLIENT): Any forward-looking plans must be clearly labelled indicative and reviewed by legal/compliance before publishing.",
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
    body: "This page explains, in general terms, how Kurubranad Nidhi Limited approaches legal structure, verification, and member protection. All content below is subject to verification and applicable law, and is pending final legal review.",
  },
  legalStructure: {
    heading: "Legal structure",
    body: "TODO(CLIENT): Confirm legal structure (e.g. Nidhi company under the Companies Act, 2013) with company secretary before publishing.",
  },
  statutory: {
    heading: "Statutory & governance information",
    body: "TODO(CLIENT): Supply verified statutory registration numbers, regulator details, and governance information.",
  },
  kyc: {
    heading: "KYC and verification",
    body: "We follow a documented KYC process for members using our services. TODO(CLIENT): Confirm the specific KYC procedure and accepted documents with compliance.",
  },
  internalControls: {
    heading: "Internal controls",
    body: "TODO(CLIENT): Supply an approved summary of internal financial and operational controls.",
  },
  valuationCustody: {
    heading: "Gold valuation and custody",
    body: "Gold offered as loan security is valued and stored under a documented internal procedure. TODO(CLIENT): Confirm procedure detail and any insurance arrangements before publishing.",
  },
  grievance: {
    heading: "Grievance redressal",
    id: "grievance",
    body: "TODO(CLIENT): Supply the approved grievance redressal process, including escalation contact and expected response time.",
  },
  privacyPolicy: {
    heading: "Privacy Policy",
    id: "privacy-policy",
    body: "TODO(CLIENT): A full privacy policy must be drafted and approved by legal counsel, covering what data is collected via the enquiry form, how it is used, retained, and protected, and member rights regarding their data. We do not collect Aadhaar, PAN, OTPs, bank credentials, passwords, or uploaded financial documents through this website.",
  },
  terms: {
    heading: "Terms of Use",
    id: "terms",
    body: "TODO(CLIENT): A full terms of use document must be drafted and approved by legal counsel before publishing.",
  },
  policiesDownloads: {
    heading: "Policies and downloads",
    body: "Approved policy documents will be listed here once supplied by the client.",
  },
};

export const contactContent = {
  hero: {
    heading: "Contact Us",
    body: "Reach out with questions about savings, deposits, or a gold loan enquiry. We do not collect Aadhaar, PAN, OTPs, bank credentials, or financial documents through this form.",
  },
  formNote:
    "Fields marked required must be completed. We'll never ask for sensitive documents or codes through this form — that happens only in person at our office.",
};
