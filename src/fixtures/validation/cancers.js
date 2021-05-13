const cancers = {
  all: {
    name: "ALL",
    risks: {
      alllowrisk: {
        hasMultipleRegimens: true,
        percentage: "",
        regimen: ""
      },
      allhighrisk: {
        hasMultipleRegimens: true,
        percentage: "",
        regimen: ""
      },
      allveryhighrisk: {
        hasMultipleRegimens: true,
        percentage: "",
        regimen: ""
      }
    },
    showCustomRisk: false,
    hasCustomRisk: false,
    incidence: ""
  },
  apl: {
    name: "APL",
    risks: {
      aplstandardrisk: {
        hasMultipleRegimens: false,
        percentage: "",
        regimen: ""
      },
      aplhighrisk: {
        hasMultipleRegimens: false,
        percentage: "",
        regimen: ""
      }
    },
    showCustomRisk: false,
    hasCustomRisk: false,
    incidence: ""
  }
}

export default cancers;
