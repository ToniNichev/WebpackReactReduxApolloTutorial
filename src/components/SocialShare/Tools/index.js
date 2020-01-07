const SHARE_TEXT='share something';

const getPageUrl = () => {
  const url = typeof window === 'undefined' ? 'no-window-object' : window.location.href;
  return url;
}

const encodeUrl = url => (
  url === '' ?  '' : encodeURI(url)
)

const getPageHeadline = () => {
  const headline = typeof document === 'undefined' ? SHARE_TEXT : document.querySelector('H1');
  return headline === null ? SHARE_TEXT : headline.textContent;
}

export default {
  getEmailUrl(overrideUrl) {
    const url = encodeUrl(overrideUrl || getPageUrl());
    const link = `mailto:user@example.com?subject=Subject&body=${url}`;
    return link;
  },

  getFacebookUrl(overrideUrl) {
    const url = encodeUrl(overrideUrl || getPageUrl());
    const link = `https://facebook.com/sharer/sharer.php?u=${url}`;
    return link;
  },

  getLinkedinUrl(overrideUrl) {
    const url = encodeUrl(overrideUrl || getPageUrl());
    const link = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    return link;
  },

  getRedditUrl(overrideUrl) {
    const url = encodeUrl(overrideUrl || getPageUrl());
    const link = `https://reddit.com/submit/?url=${url}`;
    return link;
  },

  getTwitterUrl(shareText, overrideUrl) {
    const url = encodeUrl(overrideUrl || getPageUrl());
    const share = encodeUrl(shareText || getPageHeadline());
    const link = `https://twitter.com/intent/tweet/?text=${share}&url=${url}`;
    return link;
  },
    
  getTumblrUrl(title, caption, content, shareText, overrideUrl) {
    const Title = encodeUrl(title || getPageHeadline());
    const Caption = encodeUrl(caption || 'Caption');
    const Content = encodeUrl(content || 'content');
    const url = encodeUrl(overrideUrl || getPageUrl());
    const link = `https://www.tumblr.com/widgets/share/tool?posttype=link&title=${Title}&caption=${Caption}&content=${Content}&canonicalUrl=${url}&shareSource=tumblr_share_button`;
    return link;
  },        

}