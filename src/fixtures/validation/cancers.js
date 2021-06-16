const cancersEmpty = {
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
    incidence: {
      modeled: "",
      custom: ""
    }
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
    incidence: {
      modeled: "",
      custom: ""
    }
  }
}

const cancersFull = {
  all: {
    name: "ALL",
    risks: {
      alllowrisk: {
        hasMultipleRegimens: true,
        percentage: 33.33,
        regimen: "alllowriskregimen"
      },
      allhighrisk: {
        hasMultipleRegimens: true,
        percentage: 33.33,
        regimen: "allhighriskregimen"
      },
      allveryhighrisk: {
        hasMultipleRegimens: true,
        percentage: 33.34,
        regimen: "allveryhighriskregimen"
      }
    },
    showCustomRisk: false,
    hasCustomRisk: false,
    incidence: {
      modeled: "",
      custom: 40
    }
  },
  apl: {
    name: "APL",
    risks: {
      aplstandardrisk: {
        hasMultipleRegimens: false,
        percentage: 50,
        regimen: "aplstandardriskregimen"
      },
      aplhighrisk: {
        hasMultipleRegimens: false,
        percentage: 50,
        regimen: "aplhighriskregimen"
      }
    },
    showCustomRisk: false,
    hasCustomRisk: false,
    incidence: {
      modeled: "",
      custom: 20
    }
  }
}

export { cancersEmpty, cancersFull };
