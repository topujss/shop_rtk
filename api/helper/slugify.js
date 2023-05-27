const slugify = (name) => {
  return name.replace(/\s+/g, '-').toLowerCase();
};
module.exports = slugify;
