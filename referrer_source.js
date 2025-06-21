console.log('Traffic source:');
// Get the referrer (where user came from)
const referrer = document.referrer;

// Categorize traffic sources
function getTrafficSource() {
  if (!referrer || referrer === '') {
    return 'Direct Traffic';
  }
  
  const referrerDomain = new URL(referrer).hostname;
  
  // Social media sources
  if (referrerDomain.includes('facebook.com')) return 'Facebook';
  if (referrerDomain.includes('twitter.com') || referrerDomain.includes('x.com')) return 'Twitter';
  if (referrerDomain.includes('linkedin.com')) return 'LinkedIn';
  if (referrerDomain.includes('instagram.com')) return 'Instagram';
  
  // Search engines
  if (referrerDomain.includes('google.com')) return 'Google Search';
  if (referrerDomain.includes('bing.com')) return 'Bing Search';
  if (referrerDomain.includes('yahoo.com')) return 'Yahoo Search';
  
  // Default to referral traffic
  return `Referral: ${referrerDomain}`;
}

// Log or store the traffic source
const trafficSource = getTrafficSource();
console.log('Traffic source:', trafficSource);