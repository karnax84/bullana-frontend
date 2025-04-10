export const stylizeDate = (arg?: number | string | Date | null) => {
  if (!arg) {
    return "";
  } else if (typeof arg === "string" || typeof arg === "number") {
    arg = new Date(arg);
  }
  const year = arg.getFullYear();
  const month = `00${arg.getMonth() + 1}`.slice(-2);
  const date = `00${arg.getDate()}`.slice(-2);
  const hour = `00${arg.getHours()}`.slice(-2);
  const minute = `00${arg.getMinutes()}`.slice(-2);
  return `${year}/${month}/${date} ${hour}:${minute}`;
};

export const shortString = (arg?: string | null) => {
  if (!arg) {
    return "";
  } else if (arg?.split("").length > 10) {
    return `${arg.slice(0, 6)}...${arg.slice(-4)}`;
  }
  return arg;
};


export const formatNumber = (value: number): string  => {
  return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
  }).format(value);
}

export const formatXP = (value: number): string => {
  let formattedValue: string;

  if (value >= 1_000_000) {
    formattedValue = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: value % 1_000_000 === 0 ? 0 : 1, // No decimals if the value is a whole number
      maximumFractionDigits: 1,
    }).format(value / 1_000_000) + 'M';
  } else if (value >= 1_000) {
    formattedValue = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: value % 1_000 === 0 ? 0 : 1, // No decimals if the value is a whole number
      maximumFractionDigits: 1,
    }).format(value / 1_000) + 'K';
  } else {
    formattedValue = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }

  return formattedValue;
};

export const hexToRgba = (hex: string, alpha: number) => {
  let r = 0, g = 0, b = 0;
  if (hex.length === 7) { // hex format: #RRGGBB
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const formatDate = (dateString: string, type: 'today' | 'week' | 'month' | 'all') => {
  const date = new Date(dateString);

  const optionsToday = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false // Use 24-hour format
  } as Intl.DateTimeFormatOptions;

  const optionsWeek = {
    weekday: 'short', // Day of the week
    hour: '2-digit',
    minute: '2-digit',
    hour12: false // Use 24-hour format
  } as Intl.DateTimeFormatOptions;

  const optionsMonth = {
    month: '2-digit', // Numeric month
    day: '2-digit', // Numeric day
    hour: '2-digit',
    minute: '2-digit',
    hour12: false // Use 24-hour format
  } as Intl.DateTimeFormatOptions;

  const optionsAllTime = {
    year: 'numeric',
    month: '2-digit', // Numeric month
    day: '2-digit', // Numeric day
    hour: '2-digit',
    minute: '2-digit',
    hour12: false // Use 24-hour format
  } as Intl.DateTimeFormatOptions;

  switch (type) {
    case 'today':
      return date.toLocaleString('en-US', optionsToday);
    case 'week':
      return date.toLocaleString('en-US', optionsWeek);
    case 'month':
      return `${date.toLocaleTimeString('en-US', optionsMonth)}`;
    case 'all':
      return `${date.toLocaleTimeString('en-US', optionsAllTime)}`;
    default:
      return dateString; // Fallback if type is not one of the expected values
  }
};


export const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};


export const timeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);  // Convert Dates to numbers

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count > 0) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
};
