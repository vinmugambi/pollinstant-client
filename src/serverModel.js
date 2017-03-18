let survey = new Survey({
      owner: req.user._id,
      pollDescription: req.body.pollDescription,
      questions: req.body.questions,
      available: req.body.available,
      visible: req.body.visible,
      targetMinAge: req.body.minAge,
      targetMaxAge: req.body.maxAge,
      targetSex: req.body.sex,
      targetMinEduLvl: req.body.minEducationLevel,
      targetmaxEduLvl: req.body.maxEducationLevel,
      targetCounties: req.body.counties,
      targetCities: req.body.cities
    })
