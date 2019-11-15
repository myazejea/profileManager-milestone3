var fans = function(s, st, w, a) {
  fansModel = {submissions:s, striking: st, wrestling: w, all3: a};
  return fansModel;
};

module.exports.fans = fans;
