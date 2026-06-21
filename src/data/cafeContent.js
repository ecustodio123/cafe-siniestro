export const SHOW_COURSES = false;

const navItems = [
  { key: "home", to: "/" },
  { key: "courses", to: "/cursos" },
  { key: "blog", to: "/blog" },
  { key: "contact", to: "/contacto" },
];

export const siteNav = navItems.filter((item) => SHOW_COURSES || item.key !== "courses");

export const stats = ["risk", "cases", "agenda"];

export const focusAreas = ["riskManagement", "insuranceClaims", "supplyChain"];

export const methodSteps = ["observe", "evidence", "translate"];

export const courses = [
  {
    id: "supplyChainClaimsBasics",
    topics: ["traceability", "documentation", "responsibilities"],
  },
  {
    id: "logisticsRiskManagement",
    topics: ["riskMapping", "controls", "continuity"],
  },
  {
    id: "assessmentEvidenceCriteria",
    topics: ["evidence", "damage", "assessmentCriteria"],
  },
  {
    id: "projectCargoClaims",
    topics: ["projectCargo", "maritime", "heavyLoss"],
  },
];

export const blogPosts = [
  { id: "suezCanalBlockage", slug: "bloqueo-canal-suez-ever-given" },
  { id: "kfcChickenEffect", slug: "efecto-pollo-kfc-colapso-logistico" },
  { id: "takataAirbagCrisis", slug: "crisis-bolsas-aire-takata" },
];
