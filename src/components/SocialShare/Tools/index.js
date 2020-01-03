export default {

  getFacebookUrl(overrideUrl) {
    const url = overrideUrl || window.location.href;
    const link = `https://facebook.com/sharer/sharer.php?u=${url}`;
    return link;
  }

  getLinkedinUrl(overrideUrl) {
    const url = overrideUrl || window.location.href;
    const link = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    return link;
  }

}