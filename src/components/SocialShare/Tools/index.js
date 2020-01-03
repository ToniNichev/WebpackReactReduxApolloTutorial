const getPageUrl = () => {
  return window.location.href;
}

export default {

  getEmailUrl(overrideUrl) {
    const url = overrideUrl || getPageUrl();
    const link = `mailto:user@example.com?subject=Subject&body=${url}`;
    return link;
  },

  getFacebookUrl(overrideUrl) {
    const url = overrideUrl || getPageUrl();
    const link = `https://facebook.com/sharer/sharer.php?u=${url}`;
    return link;
  },

  getLinkedinUrl(overrideUrl) {
    const url = overrideUrl || getPageUrl();
    const link = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    return link;
  },

  getRedditUrl(overrideUrl) {
    const url = overrideUrl || getPageUrl();
    const link = `https://reddit.com/submit/?url=${url}`;
    return link;
  },

  getTwitterUrl(shareText, overrideUrl) {
    const url = overrideUrl || getPageUrl();
    const share = shareText || 'share text';
    const link = `https://twitter.com/intent/tweet/?text=${share}&url=${url}`;
    return link;
  },
    
  getTumblrUrl(title, caption, content, shareText, overrideUrl) {
    const _title = title || 'Title';
    const _caption = caption || 'Caption';
    const _content = content || 'content';
    const url = overrideUrl || getPageUrl();
    const share = shareText || 'share text';
    const link = `https://www.tumblr.com/widgets/share/tool?posttype=link&title=${_title}&caption=${_caption}&content=${_content}&canonicalUrl=${url}&shareSource=tumblr_share_button`;
    return link;
  },        

}