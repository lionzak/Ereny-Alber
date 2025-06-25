const referrer = document.referrer;

function getTrafficSource() {
  if (!referrer || referrer === '') {
    return 'Direct Traffic';
  }
  
  const referrerDomain = new URL(referrer).hostname;
  
  if (referrerDomain.includes('facebook.com')) return 'Facebook';
  if (referrerDomain.includes('twitter.com') || referrerDomain.includes('x.com')) return 'Twitter';
  if (referrerDomain.includes('linkedin.com')) return 'LinkedIn';
  if (referrerDomain.includes('instagram.com')) return 'Instagram';
  
  if (referrerDomain.includes('google.com')) return 'Google Search';
  if (referrerDomain.includes('bing.com')) return 'Bing Search';
  if (referrerDomain.includes('yahoo.com')) return 'Yahoo Search';
  
  return `Referral: ${referrerDomain}`;
}

const trafficSource = getTrafficSource();
console.log('Traffic source:', trafficSource);