/**
 * BRANCH DATA
 * ---------------------------------------------------------------------------
 * Sourced directly from the client's corporate profile PDF and branch
 * signage photographs. Inauguration details are kept for the "our story"
 * narrative on the Corporate Profile page, not published as standalone
 * claims elsewhere.
 *
 * NOTE ON BRANCH 5 (Chalode): the PDF describes this as inaugurating on
 * 18 August 2026 — which, depending on today's date, may already have
 * happened by the time this site goes live. TODO(CLIENT): confirm whether
 * this branch has opened yet, and update its status/copy accordingly
 * before publishing.
 */

export interface Branch {
  id: string;
  name: string;
  areaLabel: string; // short label for chips/filters
  addressLines: string[];
  phone?: string;
  licenceNo?: string;
  image: string;
  imageAlt: string;
  inaugurated?: {
    date: string;
    by: string;
  };
  status: "open" | "opening-soon";
}

export const branches: Branch[] = [
  {
    id: "perambra",
    name: "Perambra Branch",
    areaLabel: "Perambra, Kozhikode",
    addressLines: [
      "Door No: 5/821-A, Old EMS Hospital Road",
      "Opposite Perambra Market",
      "Perambra, Kerala — 673525",
    ],
    image: "/images/branches/branch-perambra.jpg",
    imageAlt: "Kurumbranad Gold Loan's first branch signage at Perambra, Kerala",
    inaugurated: { date: "8 August 2020", by: "Mr. Pramod V., President, Perambra Grama Panchayat" },
    status: "open",
  },
  {
    id: "thazhechovva",
    name: "Thazhe Chovva Branch",
    areaLabel: "Thazhe Chovva, Kannur",
    addressLines: [
      "1st Floor, Madhava Apartments, Corporation No. XXVIII, 1502/2",
      "Thezhunnil Peedika, Thazhe Chovva, Opp. Gomri Vilasam School",
      "Above Canara Bank, Nele Chovva (PO), Kannur — 670006",
    ],
    licenceNo: "32120375095",
    image: "/images/branches/branch-thazhechovva.jpg",
    imageAlt: "Kurumbranad Gold Loan branch signage and interior at Thazhe Chovva, Kannur",
    inaugurated: { date: "14 July 2022", by: "Smt. Shahina, Councilor, Ward 20, Kannur Corporation" },
    status: "open",
  },
  {
    id: "keezhur",
    name: "Keezhur Branch",
    areaLabel: "Keezhur, Iritty",
    addressLines: [
      "Elite Complex, 1st Floor, Above HDFC Bank",
      "Keezhur (PO), Iritty",
      "Kannur — 670703",
    ],
    licenceNo: "32120394445",
    image: "/images/branches/branch-keezhur.jpg",
    imageAlt: "Kurumbranad Gold Loan branch inauguration and signage at Keezhur, Iritty",
    inaugurated: { date: "10 July 2023", by: "Smt. Sreelatha K., Chairperson, Iritty Municipality" },
    status: "open",
  },
  {
    id: "balussery",
    name: "Balussery Branch",
    areaLabel: "Balussery, Kozhikode",
    // Full door/street number wasn't visible in the supplied photo — using
    // the confirmed area name only until the client provides the rest.
    addressLines: ["Balussery, Kozhikode"],
    image: "/images/branches/branch-balussery.jpg",
    imageAlt: "Kurumbranad Gold Loan branch storefront at Balussery, Kozhikode",
    inaugurated: { date: "26 August 2025", by: "Smt. Krishnaveni Manikkoth, President, Nanmada Grama Panchayat" },
    status: "open",
  },
  {
    id: "chalode",
    name: "Chalode Branch",
    areaLabel: "Chalode, Kannur",
    addressLines: [
      "Building No. KLP-1/687-F, 687 G, C Vee Complex",
      "Near H.P Petrol Pump, Kannur Road, Chalode",
      "Edayannur (PO), Kannur — 670595",
    ],
    phone: "8089 099 196",
    // TODO(CLIENT): confirm whether this branch has opened as of the
    // inauguration date below — the PDF was prepared shortly before it.
    image: "/images/branches/branch-perambra.jpg", // TODO(CLIENT): no Chalode-specific photo supplied yet
    imageAlt: "Kurumbranad Gold Loan — Chalode branch (photo pending)",
    inaugurated: { date: "18 August 2026", by: "Mr. Sajeevan C., President, Keezhallur Grama Panchayat" },
    status: "opening-soon",
  },
];
