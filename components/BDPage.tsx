import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Phone, ArrowRight, ClipboardList, Cpu, Rocket, CheckCircle2, XCircle, Check, Users, Zap, ChevronDown, ChevronUp, AlertCircle, Search, X, TrendingUp, Clock, ShieldCheck, MessageCircle, Mail, BarChart3, Globe, Lock, Volume2, PhoneCall } from 'lucide-react';

const allCountries = [
  { name: "Afghanistan", code: "AF", dial_code: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "AL", dial_code: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "DZ", dial_code: "+213", flag: "🇩🇿" },
  { name: "American Samoa", code: "AS", dial_code: "+1-684", flag: "🇦🇸" },
  { name: "Andorra", code: "AD", dial_code: "+376", flag: "🇦🇩" },
  { name: "Angola", code: "AO", dial_code: "+244", flag: "🇦🇴" },
  { name: "Anguilla", code: "AI", dial_code: "+1-264", flag: "🇦🇮" },
  { name: "Antarctica", code: "AQ", dial_code: "+672", flag: "🇦🇶" },
  { name: "Antigua and Barbuda", code: "AG", dial_code: "+1-268", flag: "🇦🇬" },
  { name: "Argentina", code: "AR", dial_code: "+54", flag: "🇦🇷" },
  { name: "Armenia", code: "AM", dial_code: "+374", flag: "🇦🇲" },
  { name: "Aruba", code: "AW", dial_code: "+297", flag: "🇦🇼" },
  { name: "Australia", code: "AU", dial_code: "+61", flag: "🇦🇺" },
  { name: "Austria", code: "AT", dial_code: "+43", flag: "🇦🇹" },
  { name: "Azerbaijan", code: "AZ", dial_code: "+994", flag: "🇦🇿" },
  { name: "Bahamas", code: "BS", dial_code: "+1-242", flag: "🇧🇸" },
  { name: "Bahrain", code: "BH", dial_code: "+973", flag: "🇧🇭" },
  { name: "Bangladesh", code: "BD", dial_code: "+880", flag: "🇧🇩" },
  { name: "Barbados", code: "BB", dial_code: "+1-246", flag: "🇧🇧" },
  { name: "Belarus", code: "BY", dial_code: "+375", flag: "🇧🇾" },
  { name: "Belgium", code: "BE", dial_code: "+32", flag: "🇧🇪" },
  { name: "Belize", code: "BZ", dial_code: "+501", flag: "🇧🇿" },
  { name: "Benin", code: "BJ", dial_code: "+229", flag: "🇧🇯" },
  { name: "Bermuda", code: "BM", dial_code: "+1-441", flag: "🇧🇲" },
  { name: "Bhutan", code: "BT", dial_code: "+975", flag: "🇧🇹" },
  { name: "Bolivia", code: "BO", dial_code: "+591", flag: "🇧🇴" },
  { name: "Bosnia and Herzegovina", code: "BA", dial_code: "+387", flag: "🇧🇦" },
  { name: "Botswana", code: "BW", dial_code: "+267", flag: "🇧🇼" },
  { name: "Brazil", code: "BR", dial_code: "+55", flag: "🇧🇷" },
  { name: "British Indian Ocean Territory", code: "IO", dial_code: "+246", flag: "🇮🇴" },
  { name: "British Virgin Islands", code: "VG", dial_code: "+1-284", flag: "🇻🇬" },
  { name: "Brunei", code: "BN", dial_code: "+673", flag: "🇧🇳" },
  { name: "Bulgaria", code: "BG", dial_code: "+359", flag: "🇧🇬" },
  { name: "Burkina Faso", code: "BF", dial_code: "+226", flag: "🇧🇫" },
  { name: "Burundi", code: "BI", dial_code: "+257", flag: "🇧🇮" },
  { name: "Cambodia", code: "KH", dial_code: "+855", flag: "🇰🇭" },
  { name: "Cameroon", code: "CM", dial_code: "+237", flag: "🇨🇲" },
  { name: "Canada", code: "CA", dial_code: "+1", flag: "🇨🇦" },
  { name: "Cape Verde", code: "CV", dial_code: "+238", flag: "🇨🇻" },
  { name: "Cayman Islands", code: "KY", dial_code: "+1-345", flag: "🇰🇾" },
  { name: "Central African Republic", code: "CF", dial_code: "+236", flag: "🇨🇫" },
  { name: "Chad", code: "TD", dial_code: "+235", flag: "🇹🇩" },
  { name: "Chile", code: "CL", dial_code: "+56", flag: "🇨🇱" },
  { name: "China", code: "CN", dial_code: "+86", flag: "🇨🇳" },
  { name: "Christmas Island", code: "CX", dial_code: "+61", flag: "🇨🇽" },
  { name: "Cocos Islands", code: "CC", dial_code: "+61", flag: "🇨🇨" },
  { name: "Colombia", code: "CO", dial_code: "+57", flag: "🇨🇴" },
  { name: "Comoros", code: "KM", dial_code: "+269", flag: "🇰🇲" },
  { name: "Cook Islands", code: "CK", dial_code: "+682", flag: "🇨🇰" },
  { name: "Costa Rica", code: "CR", dial_code: "+506", flag: "🇨🇷" },
  { name: "Croatia", code: "HR", dial_code: "+385", flag: "🇭🇷" },
  { name: "Cuba", code: "CU", dial_code: "+53", flag: "🇨🇺" },
  { name: "Curacao", code: "CW", dial_code: "+599", flag: "🇨🇼" },
  { name: "Cyprus", code: "CY", dial_code: "+357", flag: "🇨🇾" },
  { name: "Czech Republic", code: "CZ", dial_code: "+420", flag: "🇨🇿" },
  { name: "Democratic Republic of the Congo", code: "CD", dial_code: "+243", flag: "🇨🇩" },
  { name: "Denmark", code: "DK", dial_code: "+45", flag: "🇩🇰" },
  { name: "Djibouti", code: "DJ", dial_code: "+253", flag: "🇩🇯" },
  { name: "Dominica", code: "DM", dial_code: "+1-767", flag: "🇩🇲" },
  { name: "Dominican Republic", code: "DO", dial_code: "+1-809, +1-829, +1-849", flag: "🇩🇴" },
  { name: "East Timor", code: "TL", dial_code: "+670", flag: "🇹🇱" },
  { name: "Ecuador", code: "EC", dial_code: "+593", flag: "🇪🇨" },
  { name: "Egypt", code: "EG", dial_code: "+20", flag: "🇪🇬" },
  { name: "El Salvador", code: "SV", dial_code: "+503", flag: "🇸🇻" },
  { name: "Equatorial Guinea", code: "GQ", dial_code: "+240", flag: "🇬🇶" },
  { name: "Eritrea", code: "ER", dial_code: "+291", flag: "🇪🇷" },
  { name: "Estonia", code: "EE", dial_code: "+372", flag: "🇪🇪" },
  { name: "Ethiopia", code: "ET", dial_code: "+251", flag: "🇪🇹" },
  { name: "Falkland Islands", code: "FK", dial_code: "+500", flag: "🇫🇰" },
  { name: "Faroe Islands", code: "FO", dial_code: "+298", flag: "🇫🇴" },
  { name: "Fiji", code: "FJ", dial_code: "+679", flag: "🇫🇯" },
  { name: "Finland", code: "FI", dial_code: "+358", flag: "🇫🇮" },
  { name: "France", code: "FR", dial_code: "+33", flag: "🇫🇷" },
  { name: "French Polynesia", code: "PF", dial_code: "+689", flag: "🇵🇫" },
  { name: "Gabon", code: "GA", dial_code: "+241", flag: "🇬🇦" },
  { name: "Gambia", code: "GM", dial_code: "+220", flag: "🇬🇲" },
  { name: "Georgia", code: "GE", dial_code: "+995", flag: "🇬🇪" },
  { name: "Germany", code: "DE", dial_code: "+49", flag: "🇩🇪" },
  { name: "Ghana", code: "GH", dial_code: "+233", flag: "🇬🇭" },
  { name: "Gibraltar", code: "GI", dial_code: "+350", flag: "🇬🇮" },
  { name: "Greece", code: "GR", dial_code: "+30", flag: "🇬🇷" },
  { name: "Greenland", code: "GL", dial_code: "+299", flag: "🇬🇱" },
  { name: "Grenada", code: "GD", dial_code: "+1-473", flag: "🇬🇩" },
  { name: "Guam", code: "GU", dial_code: "+1-671", flag: "🇬🇺" },
  { name: "Guatemala", code: "GT", dial_code: "+502", flag: "🇬🇹" },
  { name: "Guernsey", code: "GG", dial_code: "+44-1481", flag: "🇬🇬" },
  { name: "Guinea", code: "GN", dial_code: "+224", flag: "🇬🇳" },
  { name: "Guinea-Bissau", code: "GW", dial_code: "+245", flag: "🇬🇼" },
  { name: "Guyana", code: "GY", dial_code: "+592", flag: "🇬🇾" },
  { name: "Haiti", code: "HT", dial_code: "+509", flag: "🇭🇹" },
  { name: "Honduras", code: "HN", dial_code: "+504", flag: "🇭🇳" },
  { name: "Hong Kong", code: "HK", dial_code: "+852", flag: "🇭🇰" },
  { name: "Hungary", code: "HU", dial_code: "+36", flag: "🇭🇺" },
  { name: "Iceland", code: "IS", dial_code: "+354", flag: "🇮🇸" },
  { name: "India", code: "IN", dial_code: "+91", flag: "🇮🇳" },
  { name: "Indonesia", code: "ID", dial_code: "+62", flag: "🇮🇩" },
  { name: "Iran", code: "IR", dial_code: "+98", flag: "🇮🇷" },
  { name: "Iraq", code: "IQ", dial_code: "+964", flag: "🇮🇶" },
  { name: "Ireland", code: "IE", dial_code: "+353", flag: "🇮🇪" },
  { name: "Isle of Man", code: "IM", dial_code: "+44-1624", flag: "🇮🇲" },
  { name: "Israel", code: "IL", dial_code: "+972", flag: "🇮🇱" },
  { name: "Italy", code: "IT", dial_code: "+39", flag: "🇮🇹" },
  { name: "Ivory Coast", code: "CI", dial_code: "+225", flag: "🇨🇮" },
  { name: "Jamaica", code: "JM", dial_code: "+1-876", flag: "🇯🇲" },
  { name: "Japan", code: "JP", dial_code: "+81", flag: "🇯🇵" },
  { name: "Jersey", code: "JE", dial_code: "+44-1534", flag: "🇯🇪" },
  { name: "Jordan", code: "JO", dial_code: "+962", flag: "🇯🇴" },
  { name: "Kazakhstan", code: "KZ", dial_code: "+7", flag: "🇰🇿" },
  { name: "Kenya", code: "KE", dial_code: "+254", flag: "🇰🇪" },
  { name: "Kiribati", code: "KI", dial_code: "+686", flag: "🇰🇮" },
  { name: "Kosovo", code: "XK", dial_code: "+383", flag: "🇽🇰" },
  { name: "Kuwait", code: "KW", dial_code: "+965", flag: "🇰🇼" },
  { name: "Kyrgyzstan", code: "KG", dial_code: "+996", flag: "🇰🇬" },
  { name: "Laos", code: "LA", dial_code: "+856", flag: "🇱🇦" },
  { name: "Latvia", code: "LV", dial_code: "+371", flag: "🇱🇻" },
  { name: "Lebanon", code: "LB", dial_code: "+961", flag: "🇱🇧" },
  { name: "Lesotho", code: "LS", dial_code: "+266", flag: "🇱🇸" },
  { name: "Liberia", code: "LR", dial_code: "+231", flag: "🇱🇷" },
  { name: "Libya", code: "LY", dial_code: "+218", flag: "🇱🇾" },
  { name: "Liechtenstein", code: "LI", dial_code: "+423", flag: "🇱🇮" },
  { name: "Lithuania", code: "LT", dial_code: "+370", flag: "🇱🇹" },
  { name: "Luxembourg", code: "LU", dial_code: "+352", flag: "🇱🇺" },
  { name: "Macau", code: "MO", dial_code: "+853", flag: "🇲🇴" },
  { name: "Macedonia", code: "MK", dial_code: "+389", flag: "🇲🇰" },
  { name: "Madagascar", code: "MG", dial_code: "+261", flag: "🇲🇬" },
  { name: "Malawi", code: "MW", dial_code: "+265", flag: "🇲🇼" },
  { name: "Malaysia", code: "MY", dial_code: "+60", flag: "🇲🇾" },
  { name: "Maldives", code: "MV", dial_code: "+960", flag: "🇲🇻" },
  { name: "Mali", code: "ML", dial_code: "+223", flag: "🇲🇱" },
  { name: "Malta", code: "MT", dial_code: "+356", flag: "🇲🇹" },
  { name: "Marshall Islands", code: "MH", dial_code: "+692", flag: "🇲🇭" },
  { name: "Mauritania", code: "MR", dial_code: "+222", flag: "🇲🇷" },
  { name: "Mauritius", code: "MU", dial_code: "+230", flag: "🇲🇺" },
  { name: "Mayotte", code: "YT", dial_code: "+262", flag: "🇾🇹" },
  { name: "Mexico", code: "MX", dial_code: "+52", flag: "🇲🇽" },
  { name: "Micronesia", code: "FM", dial_code: "+691", flag: "🇫🇲" },
  { name: "Moldova", code: "MD", dial_code: "+373", flag: "🇲🇩" },
  { name: "Monaco", code: "MC", dial_code: "+377", flag: "🇲🇨" },
  { name: "Mongolia", code: "MN", dial_code: "+976", flag: "🇲🇳" },
  { name: "Montenegro", code: "ME", dial_code: "+382", flag: "🇲🇪" },
  { name: "Montserrat", code: "MS", dial_code: "+1-664", flag: "🇲🇸" },
  { name: "Morocco", code: "MA", dial_code: "+212", flag: "🇲🇦" },
  { name: "Mozambique", code: "MZ", dial_code: "+258", flag: "🇲🇿" },
  { name: "Myanmar", code: "MM", dial_code: "+95", flag: "🇲🇲" },
  { name: "Namibia", code: "NA", dial_code: "+264", flag: "🇳🇦" },
  { name: "Nauru", code: "NR", dial_code: "+674", flag: "🇳🇷" },
  { name: "Nepal", code: "NP", dial_code: "+977", flag: "🇳🇵" },
  { name: "Netherlands", code: "NL", dial_code: "+31", flag: "🇳🇱" },
  { name: "Netherlands Antilles", code: "AN", dial_code: "+599", flag: "🇳🇱" },
  { name: "New Caledonia", code: "NC", dial_code: "+687", flag: "🇳🇨" },
  { name: "New Zealand", code: "NZ", dial_code: "+64", flag: "🇳🇿" },
  { name: "Nicaragua", code: "NI", dial_code: "+505", flag: "🇳🇮" },
  { name: "Niger", code: "NE", dial_code: "+227", flag: "🇳🇪" },
  { name: "Nigeria", code: "NG", dial_code: "+234", flag: "🇳🇬" },
  { name: "Niue", code: "NU", dial_code: "+683", flag: "🇳🇺" },
  { name: "North Korea", code: "KP", dial_code: "+850", flag: "🇰🇵" },
  { name: "Northern Mariana Islands", code: "MP", dial_code: "+1-670", flag: "🇲🇵" },
  { name: "Norway", code: "NO", dial_code: "+47", flag: "🇳🇴" },
  { name: "Oman", code: "OM", dial_code: "+968", flag: "🇴🇲" },
  { name: "Pakistan", code: "PK", dial_code: "+92", flag: "🇵🇰" },
  { name: "Palau", code: "PW", dial_code: "+680", flag: "🇵🇼" },
  { name: "Palestine", code: "PS", dial_code: "+970", flag: "🇵🇸" },
  { name: "Panama", code: "PA", dial_code: "+507", flag: "🇵🇦" },
  { name: "Papua New Guinea", code: "PG", dial_code: "+675", flag: "🇵🇬" },
  { name: "Paraguay", code: "PY", dial_code: "+595", flag: "🇵🇾" },
  { name: "Peru", code: "PE", dial_code: "+51", flag: "🇵🇪" },
  { name: "Philippines", code: "PH", dial_code: "+63", flag: "🇵🇭" },
  { name: "Pitcairn", code: "PN", dial_code: "+64", flag: "🇵🇳" },
  { name: "Poland", code: "PL", dial_code: "+48", flag: "🇵🇱" },
  { name: "Portugal", code: "PT", dial_code: "+351", flag: "🇵🇹" },
  { name: "Puerto Rico", code: "PR", dial_code: "+1-787, +1-939", flag: "🇵🇷" },
  { name: "Qatar", code: "QA", dial_code: "+974", flag: "🇶🇦" },
  { name: "Republic of the Congo", code: "CG", dial_code: "+242", flag: "🇨🇬" },
  { name: "Reunion", code: "RE", dial_code: "+262", flag: "🇷🇪" },
  { name: "Romania", code: "RO", dial_code: "+40", flag: "🇷🇴" },
  { name: "Russia", code: "RU", dial_code: "+7", flag: "🇷🇺" },
  { name: "Rwanda", code: "RW", dial_code: "+250", flag: "🇷🇼" },
  { name: "Saint Barthelemy", code: "BL", dial_code: "+590", flag: "🇧🇱" },
  { name: "Saint Helena", code: "SH", dial_code: "+290", flag: "🇸🇭" },
  { name: "Saint Kitts and Nevis", code: "KN", dial_code: "+1-869", flag: "🇰🇳" },
  { name: "Saint Lucia", code: "LC", dial_code: "+1-758", flag: "🇱🇨" },
  { name: "Saint Martin", code: "MF", dial_code: "+590", flag: "🇲🇫" },
  { name: "Saint Pierre and Miquelon", code: "PM", dial_code: "+508", flag: "🇵🇲" },
  { name: "Saint Vincent and the Grenadines", code: "VC", dial_code: "+1-784", flag: "🇻🇨" },
  { name: "Samoa", code: "WS", dial_code: "+685", flag: "🇼🇸" },
  { name: "San Marino", code: "SM", dial_code: "+378", flag: "🇸🇲" },
  { name: "Sao Tome and Principe", code: "ST", dial_code: "+239", flag: "🇸🇹" },
  { name: "Saudi Arabia", code: "SA", dial_code: "+966", flag: "🇸🇦" },
  { name: "Senegal", code: "SN", dial_code: "+221", flag: "🇸🇳" },
  { name: "Serbia", code: "RS", dial_code: "+381", flag: "🇷🇸" },
  { name: "Seychelles", code: "SC", dial_code: "+248", flag: "🇸🇨" },
  { name: "Sierra Leone", code: "SL", dial_code: "+232", flag: "🇸🇱" },
  { name: "Singapore", code: "SG", dial_code: "+65", flag: "🇸🇬" },
  { name: "Sint Maarten", code: "SX", dial_code: "+1-721", flag: "🇸🇽" },
  { name: "Slovakia", code: "SK", dial_code: "+421", flag: "🇸🇰" },
  { name: "Slovenia", code: "SI", dial_code: "+386", flag: "🇸🇮" },
  { name: "Solomon Islands", code: "SB", dial_code: "+677", flag: "🇸🇧" },
  { name: "Somalia", code: "SO", dial_code: "+252", flag: "🇸🇴" },
  { name: "South Africa", code: "ZA", dial_code: "+27", flag: "🇿🇦" },
  { name: "South Korea", code: "KR", dial_code: "+82", flag: "🇰🇷" },
  { name: "South Sudan", code: "SS", dial_code: "+211", flag: "🇸🇸" },
  { name: "Spain", code: "ES", dial_code: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", code: "LK", dial_code: "+94", flag: "🇱🇰" },
  { name: "Sudan", code: "SD", dial_code: "+249", flag: "🇸🇩" },
  { name: "Suriname", code: "SR", dial_code: "+597", flag: "🇸🇷" },
  { name: "Svalbard and Jan Mayen", code: "SJ", dial_code: "+47", flag: "🇸🇯" },
  { name: "Swaziland", code: "SZ", dial_code: "+268", flag: "🇸🇿" },
  { name: "Sweden", code: "SE", dial_code: "+46", flag: "🇸🇪" },
  { name: "Switzerland", code: "CH", dial_code: "+41", flag: "🇨🇭" },
  { name: "Syria", code: "SY", dial_code: "+963", flag: "🇸🇾" },
  { name: "Taiwan", code: "TW", dial_code: "+886", flag: "🇹🇼" },
  { name: "Tajikistan", code: "TJ", dial_code: "+992", flag: "🇹🇯" },
  { name: "Tanzania", code: "TZ", dial_code: "+255", flag: "🇹🇿" },
  { name: "Thailand", code: "TH", dial_code: "+66", flag: "🇹🇭" },
  { name: "Togo", code: "TG", dial_code: "+228", flag: "🇹🇬" },
  { name: "Tokelau", code: "TK", dial_code: "+690", flag: "🇹🇰" },
  { name: "Tonga", code: "TO", dial_code: "+676", flag: "🇹🇴" },
  { name: "Trinidad and Tobago", code: "TT", dial_code: "+1-868", flag: "🇹🇹" },
  { name: "Tunisia", code: "TN", dial_code: "+216", flag: "🇹🇳" },
  { name: "Turkey", code: "TR", dial_code: "+90", flag: "🇹🇷" },
  { name: "Turkmenistan", code: "TM", dial_code: "+993", flag: "🇹🇲" },
  { name: "Turks and Caicos Islands", code: "TC", dial_code: "+1-649", flag: "🇹🇨" },
  { name: "Tuvalu", code: "TV", dial_code: "+688", flag: "🇹🇻" },
  { name: "U.S. Virgin Islands", code: "VI", dial_code: "+1-340", flag: "🇻🇮" },
  { name: "Uganda", code: "UG", dial_code: "+256", flag: "🇺🇬" },
  { name: "Ukraine", code: "UA", dial_code: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", code: "AE", dial_code: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", code: "GB", dial_code: "+44", flag: "🇬🇧" },
  { name: "United States", code: "US", dial_code: "+1", flag: "🇺🇸" },
  { name: "Uruguay", code: "UY", dial_code: "+598", flag: "🇺🇾" },
  { name: "Uzbekistan", code: "UZ", dial_code: "+998", flag: "🇺🇿" },
  { name: "Vanuatu", code: "VU", dial_code: "+678", flag: "🇻🇺" },
  { name: "Vatican", code: "VA", dial_code: "+379", flag: "🇻🇦" },
  { name: "Venezuela", code: "VE", dial_code: "+58", flag: "🇻🇪" },
  { name: "Vietnam", code: "VN", dial_code: "+84", flag: "🇻🇳" },
  { name: "Wallis and Futuna", code: "WF", dial_code: "+681", flag: "🇼🇫" },
  { name: "Western Sahara", code: "EH", dial_code: "+212", flag: "🇪🇭" },
  { name: "Yemen", code: "YE", dial_code: "+967", flag: "🇾🇪" },
  { name: "Zambia", code: "ZM", dial_code: "+260", flag: "🇿🇲" },
  { name: "Zimbabwe", code: "ZW", dial_code: "+263", flag: "🇿🇼" }
];

const BDPage: React.FC = () => {
  const words = ["Facebook", "Instagram", "WhatsApp", "Telegram"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeIndustry, setActiveIndustry] = useState<string>('service');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    // Load Tally script
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Form State
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    address: '',
    businessName: '',
    facebookUrl: '',
    websiteUrl: '',
    orderMethod: '',
    courier: '',
    businessPhone: '',
    reportEmail: '',
    languages: [] as string[],
    notes: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Country Selector State
  const [countrySearch, setCountrySearch] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(allCountries.find(c => c.code === "BD") || allCountries[17]); // Default to Bangladesh
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  
  // Testimonial Video State
  const testimonialIframeRef = useRef<HTMLIFrameElement>(null);
  const [isTestimonialMuted, setIsTestimonialMuted] = useState(true);
  const [hasTestimonialInteracted, setHasTestimonialInteracted] = useState(false);

  // Demo Video State
  const demoVideoRef = useRef<HTMLIFrameElement>(null);
  const [isDemoMuted, setIsDemoMuted] = useState(true);

  // Intro Video State
  const introVideoRef = useRef<HTMLIFrameElement>(null);
  const [isIntroMuted, setIsIntroMuted] = useState(true);

  // Tally Form State
  const [tallyKey, setTallyKey] = useState(0);

  const handleIntroUnmute = () => {
    if (introVideoRef.current && introVideoRef.current.contentWindow) {
      introVideoRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
        '*'
      );
      setIsIntroMuted(false);
    }
  };

  const handleResetTally = () => {
    setTallyKey(prev => prev + 1);
    // Re-load Tally script if needed
    setTimeout(() => {
        if ((window as any).Tally) {
            (window as any).Tally.loadEmbeds();
        }
    }, 100);
  };

  const handleTestimonialUnmute = () => {
    if (testimonialIframeRef.current && testimonialIframeRef.current.contentWindow) {
      testimonialIframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
        '*'
      );
      setIsTestimonialMuted(false);
      setHasTestimonialInteracted(true);
    }
  };

  const handleDemoUnmute = () => {
    if (demoVideoRef.current && demoVideoRef.current.contentWindow) {
      demoVideoRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
        '*'
      );
      setIsDemoMuted(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 200); 
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setShowCountryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleCheckboxChange = (lang: string) => {
    setFormData(prev => {
        const langs = prev.languages.includes(lang) 
            ? prev.languages.filter(l => l !== lang)
            : [...prev.languages, lang];
        return { ...prev, languages: langs };
    });
    if (formErrors.languages) setFormErrors(prev => ({ ...prev, languages: '' }));
  };

  const filteredCountries = allCountries.filter(c => 
    c.name.toLowerCase().includes(countrySearch.toLowerCase()) || 
    c.dial_code.includes(countrySearch)
  );

  const validateStep = (step: number) => {
    const errors: {[key: string]: string} = {};
    let isValid = true;

    if (step === 1) {
        if (!formData.firstName.trim()) errors.firstName = 'First Name is required.';
        if (!formData.email.trim()) errors.email = 'Email Address is required.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Please enter a valid email.';
        if (!formData.phone.trim()) errors.phone = 'Phone Number is required.';
        if (!formData.address.trim()) errors.address = 'Address is required.';
    } else if (step === 2) {
        if (!formData.businessName.trim()) errors.businessName = 'Business Name is required.';
        if (!formData.facebookUrl.trim()) errors.facebookUrl = 'Facebook Page URL is required.';
    } else if (step === 3) {
        if (!formData.orderMethod.trim()) errors.orderMethod = 'This field is required.';
        if (!formData.courier.trim()) errors.courier = 'This field is required.';
        if (!formData.businessPhone.trim()) errors.businessPhone = 'Business Contact Number is required.';
    } else if (step === 4) {
        if (!formData.reportEmail.trim()) errors.reportEmail = 'Business Email is required.';
        if (formData.languages.length === 0) errors.languages = 'Please select at least one language.';
    }

    if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        isValid = false;
    }

    return isValid;
  };

  const nextStep = () => {
    if (validateStep(formStep)) {
        setFormStep(prev => prev + 1);
        const formElement = document.getElementById('onboarding-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
  };

  const prevStep = () => {
    setFormStep(prev => prev - 1);
    const formElement = document.getElementById('onboarding-form');
    if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = () => {
    if (validateStep(4)) {
        setIsFormSubmitted(true);
        console.log("Form Submitted", formData);
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('onboarding-form');
    if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const steps = [
    {
      id: 1,
      step: "01",
      title: "Strategy & Consultation",
      image: "https://i.ibb.co.com/bgpVhyZZ/Black-and-white-coming-soon-Instagram-post.png",
      icon: <ClipboardList className="w-6 h-6" />,
      contentHeadline: "Book A Free Call or Direct Hotline",
      content: "We deeply analyze your business bottlenecks, collect your specific requirements, and architect a customized chatbot plan tailored to solve your unique problems.",
      cta: "Book Now",
      ctaAction: scrollToForm,
      color: "border-slate-800 text-slate-800 bg-white",
      accent: "bg-slate-900 text-white"
    },
    {
      id: 2,
      step: "02",
      title: "Development & Training",
      image: "https://i.ibb.co.com/JwP9fPbt/Black-and-white-coming-soon-Instagram-post-2.png",
      icon: <Cpu className="w-6 h-6" />,
      contentHeadline: "7-Day Build + 48h Trial",
      content: "Within 7 days, we train your agent to master your brand tone. We handle the full integration and run a rigorous 48-hour stress test to ensure it performs professionally before going live.",
      cta: null,
      color: "border-slate-800 text-slate-800 bg-white",
      accent: "bg-slate-900 text-white"
    },
    {
      id: 3,
      step: "03",
      title: "Ready & Scale",
      image: "https://i.ibb.co.com/4ZLY2pTQ/Black-and-white-coming-soon-Instagram-post-3.png",
      icon: <Rocket className="w-6 h-6" />,
      contentHeadline: "24/7 Instant Response",
      content: "Your agent goes live! Enjoy automatic 24/7 instant replies, comprehensive customer tracking, and zero missed leads. Your business now converts while you sleep.",
      cta: null,
      color: "border-slate-800 text-slate-800 bg-white",
      accent: "bg-slate-900 text-white"
    }
  ];

  const industries = [
    {
      id: 'service',
      label: 'Service Providers',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      role: 'Appointment Specialist',
      description: 'Automate bookings and inquiries so you can focus on the job.',
      before: 'Missed calls while working, playing phone tag for days.',
      after: 'Calendar fills up automatically, zero interruptions.',
      color: 'bg-gradient-to-br from-purple-600 to-indigo-600',
      details: {
        benefits: ["Automated Scheduling", "Lead Qualification", "24/7 Availability", "Zero Double-Bookings"],
        beforeDetail: "You are under a sink, on a roof, or in a client meeting. The phone rings constantly. You ignore it to finish the job, and that lead calls your competitor. You spend your evenings playing phone tag and lose the deal.",
        afterDetail: "Your AI agent answers instantly, checks your real-time calendar, qualifies the lead with your specific questions, books the appointment, and collects the deposit. You just receive a notification: 'New Job Booked'."
      }
    },
    {
      id: 'hotels',
      label: 'Hotels',
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      role: 'Guest Experience Agent',
      description: 'Handle room service, FAQs, and bookings instantly.',
      before: 'Front desk overwhelmed during check-in rush.',
      after: 'Instant answers for guests, relaxed staff, 5-star reviews.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      details: {
        benefits: ["Instant Concierge", "Room Service Automation", "Multi-language Support", "Seamless Check-in"],
        beforeDetail: "The front desk is overwhelmed with check-ins while the phone keeps ringing with simple questions like 'What time is breakfast?' or 'Can I get extra towels?'. Guests wait on hold, get frustrated, and leave bad reviews.",
        afterDetail: "Guests get instant answers via voice or chat. Room service orders go straight to the kitchen system. Your front desk staff can focus purely on welcoming guests and providing a 5-star in-person experience."
      }
    },
    {
      id: 'restaurants',
      label: 'Restaurants',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      role: 'Reservation Host',
      description: 'Take reservations and answer menu questions 24/7.',
      before: 'Staff ignoring the phone to serve seated diners.',
      after: 'Zero missed covers, staff focuses on hospitality.',
      color: 'bg-gradient-to-br from-orange-500 to-amber-500',
      details: {
        benefits: ["Table Reservations", "Menu Q&A", "Dietary Requests", "Event Booking"],
        beforeDetail: "Your hostess is busy seating a group of six. The phone rings—it's a reservation for next Friday. She ignores it to seat the guests. That caller books a table at the restaurant down the street instead.",
        afterDetail: "The AI handles all incoming calls, integrates with OpenTable/Resy to book tables in real-time, answers questions about gluten-free options, and even takes deposits for large groups automatically."
      }
    },
    {
      id: 'ecommerce',
      label: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      role: 'Support Specialist',
      description: 'Guide customers to products and track orders instantly.',
      before: 'Cart abandonment due to unanswered questions.',
      after: 'Instant sales support, higher conversion rates.',
      color: 'bg-gradient-to-br from-violet-600 to-fuchsia-600',
      details: {
        benefits: ["Order Tracking", "Product Recommendations", "Return Handling", "Cart Recovery"],
        beforeDetail: "A customer wants to buy but isn't sure about sizing. They send a message. Your support team is asleep. The customer leaves the site and buys from Amazon instead. Support inbox is flooded with 'Where is my order?' tickets.",
        afterDetail: "The AI guides the customer to the perfect size instantly, upsells a matching accessory, and processes the sale. It also automatically handles all 'Where is my order?' queries by checking your shipping database."
      }
    },
    {
      id: 'travel',
      label: 'Travel Agencies',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      role: 'Travel Concierge',
      description: 'Plan itineraries and handle last-minute changes.',
      before: 'Slow email responses losing leads to competitors.',
      after: 'Instant quotes and itinerary adjustments.',
      color: 'bg-gradient-to-br from-rose-500 to-pink-500',
      details: {
        benefits: ["Itinerary Planning", "Flight Updates", "Booking Changes", "24/7 Emergency Support"],
        beforeDetail: "Agents spend hours building basic quotes for window shoppers. When a flight is cancelled at 2 AM, clients are left stranded and panicking because your office is closed.",
        afterDetail: "AI provides instant initial quotes and itinerary ideas. It handles rebooking and flight status queries 24/7, calming clients instantly. Your human agents focus only on high-value custom packages and closing deals."
      }
    }
  ];

  const activeIndustryData = industries.find(i => i.id === activeIndustry) || industries[0];

  const pricingFeatures = [
    "One time setup fee applicable",
    "Instant reply",
    "24/7 Service",
    "Trained on your business",
    "Connect your website/database",
    "Send replies to 100+ customers simultaneously",
    "Easy recharge",
    "Can read images and voice",
    "Manual pause option",
    "Orders in google sheets",
    "Handle customer queries",
    "Take orders on website",
    "Courier tracking",
    "Transfer to human agent"
  ];

  const faqs = [
    {
      question: "What is Perfectplus Ai?",
      answer: "Perfectplus Ai is a modern AI platform that builds AI automation and smart business solutions for small, medium, and large businesses. It handles customer inbox replies, order collection, courier tracking, complaint management, real-time updates through Google Sheets, Excel, or your website, and provides advanced Voice AI agents for handling calls."
    },
    {
      question: "How does Perfectplus Ai work for businesses?",
      answer: "Perfectplus Ai automatically understands and replies to customer messages on your Facebook Page and other platforms. Once trained, it can answer customer queries, share product information, take orders, and handle phone calls with human-like voice agents."
    },
    {
      question: "What services does Perfectplus Ai provide?",
      isList: true,
      items: [
        "Automated inbox replies",
        "Human-like Voice AI Agents for inbound/outbound calls",
        "Order collection & entry into Google Sheets/Excel",
        "Courier tracking (Pathao / Steadfast)",
        "Sending product images & information",
        "Complaint logging & management",
        "Email notifications"
      ]
    },
    {
      question: "How much does Perfectplus Ai cost?",
      isPricing: true
    },
    {
      question: "Do irrelevant messages count as paid messages?",
      answer: "No. Only business-related questions are counted as paid messages. Irrelevant or off-topic messages are ignored and not charged."
    },
    {
      question: "Can Perfectplus Ai help me increase sales?",
      answer: "Yes! Since Perfectplus Ai replies to customers instantly and works 24/7, your customer support improves which can lead to more sales and orders."
    },
    {
      question: "Does Perfectplus Ai only work on Messenger?",
      answer: "No! Perfectplus Ai works on Facebook Messenger and Instagram."
    },
    {
      question: "Do I need to train the AI myself?",
      answer: "No! You don’t have to train it. The Perfectplus Ai team collects the required information from you and trains the AI for your business."
    },
    {
      question: "How long does it take to set up Perfectplus Ai?",
      answer: "It usually takes 7 business days + 48 hours trial period to fully set up and launch the Perfectplus Ai moderator."
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans text-slate-900 overflow-x-hidden relative">
      {/* Styles for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full py-20 md:py-32 overflow-hidden bg-[#020617] text-white border-b border-slate-800"
      >
        
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none z-0" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none z-0"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
            {/* Badge */}
            <div className="inline-block px-4 py-1.5 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full shadow-sm">
            <span className="text-sm font-bold text-blue-200 tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                Perfectplus Platform
            </span>
            </div>

            {/* Headline with Rotating Text */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight tracking-tight mb-8 max-w-7xl mx-auto">
            <span className="block text-slate-300">
                Turn <span className={`inline-block transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'} text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-400 to-violet-600`}>{words[currentWordIndex]}</span> Conversations
            </span>
            <span className="relative inline-block mt-2">
                <span className="absolute -inset-2 bg-gradient-to-r from-brand-purple/20 to-blue-500/20 blur-xl rounded-full"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                Into Potential Revenue.
                </span>
            </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-12 border-l-4 border-brand-purple pl-6 md:border-l-0 md:pl-0 text-left md:text-center">
            <span className="font-semibold text-white block mb-2">Stop losing 78% of customers due to slow replies.</span>
            Deploy an intelligent AI Agent that answers instantly, qualifies leads, and closes sales 24/7—so you can make money while you sleep.
            </p>

            {/* Browser Window Video Container */}
            <div className="relative w-full max-w-5xl mb-16 transform hover:scale-[1.01] transition-transform duration-500">
            {/* Browser Frame */}
            <div className="rounded-t-2xl bg-slate-900 border-b border-slate-800 p-3 flex items-center gap-2 shadow-2xl">
                <div className="flex gap-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 bg-slate-800 rounded-md h-6 w-1/2 opacity-50 text-xs flex items-center px-3 text-slate-400 font-mono">
                    perfectplus.ai/demo
                </div>
            </div>
            
            {/* Video Content */}
            <div className="aspect-video bg-slate-900 relative overflow-hidden group border-x-4 border-b-4 border-slate-900 rounded-b-2xl shadow-2xl">
                <iframe 
                    ref={introVideoRef}
                    className={`absolute inset-0 w-full h-full object-cover ${isIntroMuted ? 'pointer-events-none' : ''}`}
                    src="https://www.youtube.com/embed/JxTX_D-BD-g?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=JxTX_D-BD-g&controls=1&showinfo=0&rel=0&playsinline=1" 
                    title="Intro Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>

                {/* Overlay for Click-to-Unmute */}
                {isIntroMuted && (
                    <div 
                        className="absolute inset-0 z-10 bg-transparent cursor-pointer"
                        onClick={handleIntroUnmute}
                    ></div>
                )}

                {/* Mute Indicator */}
                {isIntroMuted && (
                   <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                      <div className="w-20 h-14 md:w-28 md:h-20 bg-brand-purple/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 border-2 border-white/20 animate-pulse">
                         <Volume2 className="w-10 h-10 md:w-12 md:h-12 text-white fill-white ml-1" />
                      </div>
                      <div className="absolute bottom-8 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md">
                          Click to Unmute
                      </div>
                   </div>
                )}
            </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full mb-16">
            <div 
                onClick={scrollToForm}
                className="relative flex items-center bg-white text-slate-900 rounded-full p-1.5 pr-8 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group w-full md:w-auto max-w-md"
            >
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100 mr-4 flex-shrink-0 bg-brand-purple/20 relative">
                <img 
                    src="https://i.ibb.co.com/ZRBZg9mg/8de32266-741d-4eac-9407-30cffb025d46.jpg" 
                    alt="Mehedi" 
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="flex flex-col text-left">
                <span className="font-bold text-lg leading-tight">Connect With Us</span>
                <span className="text-xs text-slate-500 font-medium mt-0.5 group-hover:text-brand-purple transition-colors">Speak with Mehedi</span>
                </div>
            </div>

            <a 
                href="tel:01887633339"
                className="relative flex items-center bg-white/10 backdrop-blur-md text-white rounded-full p-1.5 pr-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 group w-full md:w-auto max-w-md"
            >
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 mr-4 flex-shrink-0 bg-green-500 relative flex items-center justify-center">
                    <PhoneCall className="w-7 h-7 text-white animate-pulse" />
                </div>
                <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-lg leading-tight">Direct Hotline OR Whatsup</span>
                </div>
                <span className="text-xs text-slate-300 font-medium mt-0.5">01887633339</span>
                </div>
            </a>
            </div>

            {/* Trusted By Section */}
            <div className="w-full max-w-4xl border-t border-slate-800 pt-8">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Trusted By Industry Leaders</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                <div className="flex items-center gap-2 font-bold text-xl text-slate-400"><Globe size={24}/> GlobalTech</div>
                <div className="flex items-center gap-2 font-bold text-xl text-slate-400"><Zap size={24}/> SwiftReply</div>
                <div className="flex items-center gap-2 font-bold text-xl text-slate-400"><Lock size={24}/> SecureAI</div>
                <div className="flex items-center gap-2 font-bold text-xl text-slate-400"><BarChart3 size={24}/> GrowthCo</div>
                </div>
            </div>
        </div>
      </motion.section>



      {/* Customer Stories Section */}
      <motion.section 
        id="customer-stories" 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-slate-50 border-b border-gray-200 relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-purple/5 blur-[100px] animate-pulse"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px] animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <div className="inline-block bg-yellow-100 border border-yellow-200 px-4 py-1.5 rounded-full mb-6">
                    <span className="text-sm font-bold text-yellow-800 tracking-wide uppercase">Customer Stories</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                    Our clients don't just use it, <br/>
                    <span className="text-brand-purple">they rely on it.</span>
                </h2>
                <button className="px-8 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors shadow-lg">
                    Explore Customer Stories
                </button>
            </div>

            {/* Featured Video Testimonial */}
            <div className="mb-16 relative w-full max-w-6xl mx-auto perspective-1000">
                 {/* Browser Frame */}
                 <div className="relative bg-[#0f172a] rounded-t-2xl border-t border-x border-slate-700 shadow-2xl overflow-hidden aspect-[16/9] group transform transition-transform duration-500 hover:rotate-x-2">
                     {/* Top Bar */}
                     <div className="h-8 bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-700">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        <div className="ml-4 px-3 py-0.5 bg-slate-900 rounded text-[10px] font-mono text-slate-500 flex-1 text-center">
                            dashboard.perfectplus.ai/case-study/rt-brandup
                        </div>
                     </div>
                     
                     {/* Screen Content */}
                     <div className="relative w-full h-full bg-slate-900 flex items-center justify-center group/video">
                         <iframe
                            ref={testimonialIframeRef}
                            className="w-full h-full object-cover"
                            src="https://www.youtube.com/embed/rA623LfnghE?autoplay=1&mute=1&loop=1&playlist=rA623LfnghE&enablejsapi=1&controls=1&modestbranding=1&rel=0"
                            title="RT BrandUp Testimonial"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                         ></iframe>

                         {/* Click overlay to unmute and reveal controls */}
                         {!hasTestimonialInteracted && (
                           <div 
                              onClick={handleTestimonialUnmute}
                              className="absolute inset-0 cursor-pointer flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors z-10"
                           >
                              <div className="p-4 rounded-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 group-hover/video:opacity-100">
                                  <Volume2 className="w-8 h-8 text-white" />
                              </div>
                              
                              {/* Mute Indicator */}
                              <div className="absolute bottom-8 right-8 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md pointer-events-none flex items-center gap-2 animate-pulse">
                                  <Volume2 className="w-4 h-4" />
                                  Click to Unmute
                              </div>
                           </div>
                         )}
                     </div>
                 </div>
                 
                 {/* Stats Overlay/Section below video */}
                 <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-brand-purple/50 transition-colors text-center">
                         <h4 className="text-3xl font-bold text-brand-purple mb-1">100+</h4>
                         <p className="text-sm text-slate-500 font-medium uppercase">Hours Saved / Month</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-500/50 transition-colors text-center">
                         <h4 className="text-3xl font-bold text-blue-600 mb-1">24/7</h4>
                         <p className="text-sm text-slate-500 font-medium uppercase">Active Availability</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-green-500/50 transition-colors text-center">
                         <h4 className="text-3xl font-bold text-green-600 mb-1">3X</h4>
                         <p className="text-sm text-slate-500 font-medium uppercase">Faster Response</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-pink-500/50 transition-colors text-center">
                         <h4 className="text-3xl font-bold text-pink-600 mb-1">Zero</h4>
                         <p className="text-sm text-slate-500 font-medium uppercase">Missed Leads</p>
                      </div>
                 </div>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {/* Story 1 */}
                <motion.div variants={itemVariants} className="bg-green-50 p-8 rounded-3xl border border-green-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">24/7 Support</h3>
                    <p className="text-sm font-bold text-green-700 uppercase tracking-wide mb-4">Instant Replies</p>
                    <p className="text-slate-700 mb-6 leading-relaxed flex-grow">
                        "Perfectplus Ai handles all our customer queries instantly. We used to lose customers at night, but now our sales have increased by 40% because the AI never sleeps."
                    </p>
                    <div className="mt-auto pt-4 border-t border-green-200">
                        <p className="font-bold text-slate-900">Abir Hasan</p>
                        <p className="text-xs text-slate-500">Founder, UrbanDhaka</p>
                    </div>
                </motion.div>

                {/* Story 2 */}
                <motion.div variants={itemVariants} className="bg-blue-50 p-8 rounded-3xl border border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Zero Missed</h3>
                    <p className="text-sm font-bold text-blue-700 uppercase tracking-wide mb-4">Automated Sales</p>
                    <p className="text-slate-700 mb-6 leading-relaxed flex-grow">
                        "Every comment and message gets a reply within seconds. It collects orders automatically and sends them to our Google Sheet. It's like having a team of 10 people."
                    </p>
                    <div className="mt-auto pt-4 border-t border-blue-200">
                        <p className="font-bold text-slate-900">Farhana Akter</p>
                        <p className="text-xs text-slate-500">Owner, GlowSkin BD</p>
                    </div>
                </motion.div>

                {/* Story 3 */}
                <motion.div variants={itemVariants} className="bg-pink-50 p-8 rounded-3xl border border-pink-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Time Saver</h3>
                    <p className="text-sm font-bold text-pink-700 uppercase tracking-wide mb-4">Focus on Growth</p>
                    <p className="text-slate-700 mb-6 leading-relaxed flex-grow">
                        "I used to spend 6 hours a day replying to messages. Now Perfectplus Ai does it for me. I can finally focus on sourcing new products and expanding my business."
                    </p>
                    <div className="mt-auto pt-4 border-t border-pink-200">
                        <p className="font-bold text-slate-900">Mahmudul Haque</p>
                        <p className="text-xs text-slate-500">CEO, GadgetMart</p>
                    </div>
                </motion.div>

                {/* Story 4 */}
                <motion.div variants={itemVariants} className="bg-yellow-50 p-8 rounded-3xl border border-yellow-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Professional</h3>
                    <p className="text-sm font-bold text-yellow-700 uppercase tracking-wide mb-4">Brand Image</p>
                    <p className="text-slate-700 mb-6 leading-relaxed flex-grow">
                        "The AI speaks exactly like a professional human agent. My customers can't even tell they are talking to a bot. It has improved our brand image significantly."
                    </p>
                    <div className="mt-auto pt-4 border-t border-yellow-200">
                        <p className="font-bold text-slate-900">Nadia Islam</p>
                        <p className="text-xs text-slate-500">Director, LuxeInteriors</p>
                    </div>
                </motion.div>

                 {/* Story 5 */}
                <motion.div variants={itemVariants} className="bg-green-50 p-8 rounded-3xl border border-green-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Cost Effective</h3>
                    <p className="text-sm font-bold text-green-700 uppercase tracking-wide mb-4">High ROI</p>
                    <p className="text-slate-700 mb-6 leading-relaxed flex-grow">
                        "Hiring support staff was expensive. Perfectplus Ai costs a fraction of that and works 24/7 without any breaks. The return on investment has been incredible for us."
                    </p>
                    <div className="mt-auto pt-4 border-t border-green-200">
                        <p className="font-bold text-slate-900">Rahim Uddin</p>
                        <p className="text-xs text-slate-500">Manager, FoodiesHub</p>
                    </div>
                </motion.div>

                 {/* Story 6 */}
                <motion.div variants={itemVariants} className="bg-blue-50 p-8 rounded-3xl border border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Easy Setup</h3>
                    <p className="text-sm font-bold text-blue-700 uppercase tracking-wide mb-4">Hassle Free</p>
                    <p className="text-slate-700 mb-6 leading-relaxed flex-grow">
                        "I thought setting up AI would be hard, but the team handled everything. Within 7 days, my AI agent was live and taking orders. The process was super smooth."
                    </p>
                    <div className="mt-auto pt-4 border-t border-blue-200">
                        <p className="font-bold text-slate-900">Sadia Rahman</p>
                        <p className="text-xs text-slate-500">Owner, ModestWear</p>
                    </div>
                </motion.div>

                 {/* Story 7 */}
                <motion.div variants={itemVariants} className="bg-pink-50 p-8 rounded-3xl border border-pink-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Scalable</h3>
                    <p className="text-sm font-bold text-pink-700 uppercase tracking-wide mb-4">Handles Traffic</p>
                    <p className="text-slate-700 mb-6 leading-relaxed flex-grow">
                        "During Eid sales, we get thousands of messages. Perfectplus Ai handled them all without crashing or delaying. We didn't miss a single order this season."
                    </p>
                    <div className="mt-auto pt-4 border-t border-pink-200">
                        <p className="font-bold text-slate-900">Kamrul Islam</p>
                        <p className="text-xs text-slate-500">CEO, TechValley</p>
                    </div>
                </motion.div>

                 {/* Story 8 */}
                <motion.div variants={itemVariants} className="bg-yellow-50 p-8 rounded-3xl border border-yellow-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Data Driven</h3>
                    <p className="text-sm font-bold text-yellow-700 uppercase tracking-wide mb-4">Smart Insights</p>
                    <p className="text-slate-700 mb-6 leading-relaxed flex-grow">
                        "Not just replies, it gives us data on what customers are asking. We improved our inventory based on the AI's insights. It's a game changer for our strategy."
                    </p>
                    <div className="mt-auto pt-4 border-t border-yellow-200">
                        <p className="font-bold text-slate-900">Tasnim Jara</p>
                        <p className="text-xs text-slate-500">Marketing Head, BeautyBox</p>
                    </div>
                </motion.div>

            </motion.div>
        </div>
      </motion.section>

      {/* 1. Scrolling Text Marquee */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full bg-white py-16 overflow-hidden border-y border-gray-200"
      >
        <div className="w-full overflow-hidden">
          <div className="animate-marquee">
             {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center mx-16">
                   <span className="text-3xl md:text-5xl font-extrabold text-slate-900 whitespace-nowrap tracking-tight font-serif">
                     দেরিতে উত্তর দেওয়ায় আপনি কি কাস্টমার হারাচ্ছেন?
                   </span>
                   <span className="mx-8 text-gray-300 text-3xl md:text-5xl font-thin">|</span>
                   <span className="text-3xl md:text-5xl font-semibold text-slate-500 whitespace-nowrap tracking-tight font-serif">
                     গবেষণায় দেখা গেছে <span className="font-extrabold text-brand-purple">৭৮% কাস্টমার</span> সেই ব্যবসা থেকেই কেনেন যারা সবার আগে উত্তর দেয়।
                   </span>
                   <div className="w-4 h-4 rounded-full bg-brand-purple mx-12"></div>
                </div>
             ))}
          </div>
        </div>
      </motion.section>

      {/* 2. Headline & Subheadline */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-16 bg-[#020617] relative"
      >
         <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight drop-shadow-sm">
               <span className="text-white">Wanna stop</span> <span className="relative inline-block whitespace-nowrap"><span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Losing Money?</span><svg className="absolute -bottom-2 left-0 w-full h-3 text-red-900/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg></span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-slate-700 to-slate-800 mx-auto rounded-full mb-8"></div>
            <p className="text-2xl md:text-3xl text-slate-400 font-medium leading-relaxed">
               Start your journey with <span className="font-bold text-brand-purple">Perfectplus Ai</span> by <span className="font-bold text-brand-purple bg-brand-purple/5 px-3 py-1 rounded-lg border border-brand-purple/10 shadow-sm">3 Simple Steps</span>.
            </p>
         </div>
      </motion.section>

      {/* 3. Interactive 3-Step Process Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pb-32 pt-8 bg-[#020617] relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-purple/5 blur-[100px] animate-pulse"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px] animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative"
          >
             {/* Connecting line for Desktop */}
            <div className="absolute top-12 left-0 w-full h-1 bg-slate-800 hidden md:block -z-10"></div>
            
            {steps.map((item) => {
              const isActive = activeStep === item.id;
              return (
                <motion.div 
                  variants={itemVariants}
                  key={item.id}
                  onClick={() => setActiveStep(item.id)}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 flex flex-col group border-2 ${
                    isActive 
                      ? 'border-brand-purple/50 shadow-2xl scale-105 bg-slate-800 z-10' 
                      : 'border-transparent bg-slate-900 hover:bg-slate-800 hover:shadow-lg scale-95 opacity-80 hover:opacity-100'
                  }`}
                >
                   {/* Step Number Badge */}
                   <div className={`absolute top-4 left-4 z-20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest border shadow-sm backdrop-blur-sm transition-colors ${isActive ? 'bg-brand-purple text-white border-brand-purple' : 'bg-slate-800 text-white border-slate-700'}`}>
                      STEP {item.step}
                   </div>

                   {/* Image Container */}
                   <div className={`w-full relative overflow-hidden transition-all duration-500 ${isActive ? 'h-56' : 'h-64'}`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                      />
                   </div>

                   <div className="p-6 md:p-8 flex flex-col flex-grow">
                      {/* Header Title */}
                      <div className="flex items-center justify-between mb-4">
                        <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-brand-purple' : 'text-white'}`}>
                          {item.title}
                        </h3>
                        {/* Icon */}
                        <div className={`p-2 rounded-full ${isActive ? 'bg-brand-purple/10 text-brand-purple' : 'bg-slate-700 text-slate-400'}`}>
                          {item.icon}
                        </div>
                      </div>

                      {/* Expandable Content */}
                      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pt-2 border-t border-slate-700 mt-2">
                          <h4 className="text-lg font-bold mb-3 text-white mt-4">
                            {item.contentHeadline}
                          </h4>
                          <p className="text-slate-400 leading-relaxed text-sm md:text-base mb-6">
                            {item.content}
                          </p>
                          
                          {item.cta && (
                            <div className="flex items-center text-brand-purple font-bold text-sm group/cta">
                              {item.cta} <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/cta:translate-x-1" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Indicator for inactive state */}
                      {!isActive && (
                        <div className="mt-auto pt-2 text-center">
                          <span className="text-sm font-medium text-slate-500 flex items-center justify-center group-hover:text-brand-purple transition-colors">
                            Click to expand <ChevronDown className="w-4 h-4 ml-1" />
                          </span>
                        </div>
                      )}
                   </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 4. Industries Section (NEW SPLIT-VIEW LAYOUT) */}
      <motion.section 
        id="solutions" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-32 bg-white border-t border-gray-200 overflow-hidden relative"
      >
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-20">
               <div className="inline-block bg-brand-purple/10 border border-brand-purple/20 px-6 py-1.5 rounded-full mb-6">
                 <span className="text-sm font-bold text-brand-purple tracking-wide uppercase">Solutions for every Business</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-serif font-medium text-slate-900 leading-tight">
                  Smart replies - Happy customers <br/>
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-brand-purple to-slate-900">More sales.</span>
               </h2>
            </div>

            {/* SPLIT VIEW LAYOUT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
               
               {/* Left Column: Industry Tabs */}
               <div className="lg:col-span-4 flex flex-col gap-4">
                  {industries.map((ind) => (
                     <button
                        key={ind.id}
                        onClick={() => setActiveIndustry(ind.id)}
                        className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between group ${
                           activeIndustry === ind.id
                              ? 'bg-white border-brand-purple shadow-xl scale-105 z-10'
                              : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200'
                        }`}
                     >
                        <div className="flex items-center gap-4">
                           <div className={`w-3 h-3 rounded-full ${activeIndustry === ind.id ? 'bg-brand-purple' : 'bg-slate-300 group-hover:bg-brand-purple/50'}`}></div>
                           <span className={`text-lg font-bold ${activeIndustry === ind.id ? 'text-slate-900' : 'text-slate-500'}`}>{ind.label}</span>
                        </div>
                        {activeIndustry === ind.id && <ArrowRight size={20} className="text-brand-purple animate-pulse" />}
                     </button>
                  ))}
               </div>

               {/* Right Column: Sticky Content Display */}
               <div className="lg:col-span-8 relative">
                   {/* Animated Background Blob behind content */}
                   <div className={`absolute top-10 right-10 w-full h-full ${activeIndustryData.color} opacity-10 blur-3xl rounded-full transition-colors duration-700`}></div>

                   <motion.div 
                     key={activeIndustry}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.4 }}
                     className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 min-h-[600px] flex flex-col"
                   >
                       {/* Hero Image */}
                       <div className="h-64 md:h-80 w-full relative overflow-hidden">
                           <img 
                              src={activeIndustryData.image} 
                              alt={activeIndustryData.role} 
                              className="w-full h-full object-cover opacity-90"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent flex items-end p-8">
                               <div>
                                   <div className="inline-block px-3 py-1 mb-2 bg-brand-purple text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                       {activeIndustryData.label}
                                   </div>
                                   <h3 className="text-3xl font-extrabold text-slate-900">{activeIndustryData.role}</h3>
                               </div>
                           </div>
                       </div>

                       {/* Content Body */}
                       <div className="p-8 md:p-10 flex flex-col flex-1">
                           <p className="text-lg text-slate-600 font-medium mb-8 leading-relaxed">
                               {activeIndustryData.description}
                           </p>

                           {/* Before vs After Grid */}
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                               <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                                   <div className="flex items-center gap-2 mb-3 text-red-600 font-bold uppercase text-xs tracking-wider">
                                       <XCircle size={16} /> The Struggle
                                   </div>
                                   <p className="text-sm text-slate-600 leading-relaxed">{activeIndustryData.details?.beforeDetail}</p>
                               </div>
                               <div className="bg-green-50 p-5 rounded-2xl border border-green-100 shadow-sm">
                                   <div className="flex items-center gap-2 mb-3 text-green-600 font-bold uppercase text-xs tracking-wider">
                                       <CheckCircle2 size={16} /> The Solution
                                   </div>
                                   <p className="text-sm text-slate-600 leading-relaxed">{activeIndustryData.details?.afterDetail}</p>
                               </div>
                           </div>

                           {/* Benefits List */}
                           <div className="mt-auto">
                               <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Key Benefits</h4>
                               <div className="flex flex-wrap gap-3">
                                   {activeIndustryData.details?.benefits.map((benefit, idx) => (
                                       <span key={idx} className="px-3 py-1.5 bg-slate-50 rounded-lg text-sm font-medium text-slate-600 flex items-center gap-2 border border-slate-200">
                                           <Check size={14} className="text-brand-purple" strokeWidth={3} /> {benefit}
                                       </span>
                                   ))}
                               </div>
                           </div>
                       </div>
                   </motion.div>
               </div>
            </div>

         </div>
      </motion.section>

      {/* 5. Live Demo Section */}
      <motion.section 
        id="demo" 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-32 bg-slate-50 text-slate-900 relative border-y border-gray-200 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-purple/5 blur-[100px] animate-pulse"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px] animate-pulse delay-700"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              See Our Live Demo
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              See how easily your business can run smarter
            </p>
          </div>

          <div 
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black group border border-gray-200 hover:scale-[1.01] transition-transform duration-300"
          >
            <iframe 
              ref={demoVideoRef}
              className={`absolute inset-0 w-full h-full object-cover ${isDemoMuted ? 'pointer-events-none' : ''}`}
              src="https://www.youtube.com/embed/6yHYPQ6wD3c?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=6yHYPQ6wD3c&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1" 
              title="Live Demo Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
            
            {/* Overlay for Click-to-Unmute */}
            {isDemoMuted && (
                <div 
                    className="absolute inset-0 z-10 bg-transparent cursor-pointer"
                    onClick={handleDemoUnmute}
                ></div>
            )}

            {/* Mute Indicator */}
            {isDemoMuted && (
               <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="w-20 h-14 md:w-28 md:h-20 bg-brand-purple/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 border-2 border-white/20 animate-pulse">
                     <Volume2 className="w-10 h-10 md:w-12 md:h-12 text-white fill-white ml-1" />
                  </div>
                  <div className="absolute bottom-8 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md">
                      Click to Unmute
                  </div>
               </div>
            )}

            {/* YouTube Overlay Bar */}
            <div className={`absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex justify-between items-start transition-opacity duration-300 z-30 pointer-events-none ${isDemoMuted ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
                      <img src="https://i.ibb.co.com/XfGCQ0V3/Untitled-512-x-512-px-1.png" className="w-full h-full object-cover" />
                   </div>
                   <div className="text-left">
                       <p className="text-white font-medium text-lg drop-shadow-md line-clamp-1">Presswayy AI Demo Overview</p>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. Pricing Section - Premium Upgrade */}
      <motion.section 
        id="pricing" 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-32 bg-[#0f172a] border-t border-slate-800 relative overflow-hidden"
      >
         {/* Background Glows */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                  Simple, Transparent Pricing
               </h2>
               <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                  Choose the plan that fits your business needs. No hidden fees.
               </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16"
            >
               
               {/* Starter Plan */}
               <motion.div variants={itemVariants} className="bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-brand-purple/50 hover:bg-slate-800/60 transition-all duration-500 flex flex-col h-full relative group shadow-xl hover:shadow-brand-purple/20 hover:-translate-y-2">
                  <div className="p-8 pb-4">
                     <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-brand-purple/20 transition-colors">
                           <Users className="w-6 h-6 text-white group-hover:text-brand-purple transition-colors" />
                        </div>
                        <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full uppercase tracking-wider border border-white/10">Basic</span>
                     </div>
                     <div className="mb-6">
                        <p className="text-sm text-slate-400 line-through mb-1">Tk. 4,500/month</p>
                        <div className="flex items-baseline gap-1">
                           <span className="text-4xl font-extrabold text-white">Tk. 2,999</span>
                           <span className="text-slate-400 font-medium">/month</span>
                        </div>
                     </div>
                  </div>
                  <div className="bg-white/5 py-2 text-center border-y border-white/5 group-hover:border-brand-purple/20 transition-colors">
                     <span className="text-slate-300 font-bold text-xs uppercase tracking-wide">100 User free after integration</span>
                  </div>
                  <div className="p-8 pt-6 flex-grow">
                     <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3">
                           <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                           <span className="text-sm text-slate-300 font-medium">500 Unique customers/month</span>
                        </li>
                        {pricingFeatures.slice(0, 8).map((feature, idx) => (
                           <li key={idx} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-slate-300 font-medium">{feature}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
                   <div className="p-8 pt-0 mt-auto">
                        <button 
                           onClick={scrollToForm}
                           className="w-full py-3 bg-brand-purple hover:bg-brand-purple/90 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-brand-purple/25 transform hover:-translate-y-0.5"
                        >
                           Choose Basic
                        </button>
                   </div>
               </motion.div>

               {/* Standard Plan (HIGHLIGHTED) */}
               <motion.div variants={itemVariants} className="bg-gradient-to-b from-[#2e1065] to-slate-900 rounded-3xl shadow-2xl border border-brand-purple/50 overflow-hidden transform scale-105 z-20 flex flex-col h-full relative group hover:shadow-brand-purple/40 hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-purple to-blue-500"></div>
                  <div className="p-8 pb-4">
                     <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-brand-purple/20 rounded-2xl border border-brand-purple/30">
                           <Zap className="w-6 h-6 text-brand-purple fill-brand-purple" />
                        </div>
                        <span className="px-3 py-1 bg-brand-purple text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg shadow-brand-purple/30">Most Popular</span>
                     </div>
                     <div className="mb-6">
                        <p className="text-sm text-white/60 line-through mb-1">Tk. 8,500/month</p>
                        <div className="flex items-baseline gap-1">
                           <span className="text-5xl font-extrabold text-white">Tk. 5,499</span>
                           <span className="text-slate-300 font-medium">/month</span>
                        </div>
                     </div>
                  </div>
                  <div className="bg-brand-purple/10 py-2 text-center border-y border-brand-purple/20">
                     <span className="text-brand-purple font-bold text-xs uppercase tracking-wide">100 User free after integration</span>
                  </div>
                  <div className="p-8 pt-6 flex-grow">
                     <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3">
                           <div className="w-5 h-5 rounded-full bg-brand-purple flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-purple/50">
                             <Check className="w-3 h-3 text-white" strokeWidth={4} />
                           </div>
                           <span className="text-sm text-white font-bold">1,000 Unique customers/month</span>
                        </li>
                        {pricingFeatures.map((feature, idx) => (
                           <li key={idx} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-brand-purple flex-shrink-0" />
                              <span className="text-sm text-slate-300 font-medium">{feature}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
                   <div className="p-8 pt-0 mt-auto">
                        <button 
                           onClick={scrollToForm}
                           className="w-full py-4 bg-gradient-to-r from-brand-purple to-blue-600 hover:from-brand-purple/90 hover:to-blue-600/90 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-brand-purple/25 transform hover:-translate-y-0.5"
                        >
                           Get Standard Plan
                        </button>
                   </div>
               </motion.div>

               {/* Premium Plan */}
               <motion.div variants={itemVariants} className="bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-500 flex flex-col h-full relative group shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2">
                  <div className="p-8 pb-4">
                     <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
                           <Users className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
                        </div>
                        <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full uppercase tracking-wider border border-white/10">Premium</span>
                     </div>
                     <div className="mb-6">
                        <p className="text-sm text-slate-400 line-through mb-1">Tk. 19,500/month</p>
                        <div className="flex items-baseline gap-1">
                           <span className="text-4xl font-extrabold text-white">Tk. 9,999</span>
                           <span className="text-slate-400 font-medium">/month</span>
                        </div>
                     </div>
                  </div>
                  <div className="bg-white/5 py-2 text-center border-y border-white/5 group-hover:border-blue-500/20 transition-colors">
                     <span className="text-slate-300 font-bold text-xs uppercase tracking-wide">100 User free after integration</span>
                  </div>
                  <div className="p-8 pt-6 flex-grow">
                     <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3">
                           <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                           <span className="text-sm text-slate-300 font-medium">2,000 Unique customers/month</span>
                        </li>
                        {pricingFeatures.map((feature, idx) => (
                           <li key={idx} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-slate-300 font-medium">{feature}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="p-8 pt-0 mt-auto">
                        <button 
                           onClick={scrollToForm}
                           className="w-full py-3 bg-brand-purple hover:bg-brand-purple/90 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-brand-purple/25 transform hover:-translate-y-0.5"
                        >
                           Choose Premium
                        </button>
                   </div>
               </motion.div>
            </motion.div>

            {/* Pay As You Go Section */}
            <div className="bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-brand-purple/30 shadow-lg hover:shadow-brand-purple/20 transition-all duration-300">
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                  <div className="lg:col-span-1">
                      <div className="flex items-center gap-3 mb-6">
                         <div className="p-3 bg-brand-purple/20 rounded-2xl">
                            <Zap className="w-6 h-6 text-brand-purple" />
                         </div>
                         <span className="px-3 py-1 bg-brand-purple text-white text-xs font-bold rounded-full uppercase tracking-wider">Pay as you go</span>
                      </div>
                      <div className="mb-6">
                         <div className="flex items-baseline gap-2 mb-2">
                           <span className="text-5xl font-extrabold text-white">0.19 BDT</span>
                        </div>
                        <p className="text-slate-400 font-medium uppercase tracking-wide text-sm">Per AI Reply</p>
                      </div>
                      <button 
                           onClick={scrollToForm}
                           className="w-full py-3 bg-brand-purple hover:bg-brand-purple/90 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-brand-purple/25 transform hover:-translate-y-0.5"
                      >
                           Start Custom Plan
                      </button>
                  </div>
                  <div className="lg:col-span-2">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {pricingFeatures.map((feature, idx) => (
                           <li key={idx} className="flex items-start gap-3 list-none">
                              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-slate-300 font-medium">{feature}</span>
                           </li>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </motion.section>

      {/* 7. Resources & Automation Section */}
      <motion.section 
        id="resources" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-32 bg-white text-slate-900 border-t border-gray-200 relative overflow-hidden"
      >
          {/* Animated Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-purple/5 blur-[100px] animate-pulse"></div>
              <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px] animate-pulse delay-700"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              {/* Feature Block 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32">
                  <div className="lg:w-1/2 text-left space-y-8">
                      <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 leading-tight">
                          Message & Reply <br/>
                          <span className="text-brand-purple">Automation</span>
                      </h2>
                      <div className="w-20 h-1.5 bg-brand-purple rounded-full"></div>
                      <p className="text-xl text-slate-600 leading-relaxed font-light">
                          Every message is answered instantly. No more late replies, missed orders, or frustrated customers waiting for a response.
                      </p>
                      <ul className="space-y-4">
                         {['Instant response to DM & Comments', 'Automated Order Collection', 'Seamless Human Handoff'].map(item => (
                             <li key={item} className="flex items-center gap-3">
                                 <div className="p-1 rounded-full bg-green-100 text-green-600">
                                     <Check size={16} />
                                 </div>
                                 <span className="text-slate-600 font-medium">{item}</span>
                             </li>
                         ))}
                      </ul>
                      <button 
                          onClick={scrollToForm}
                          className="px-8 py-3 bg-brand-purple text-white rounded-full font-bold hover:bg-brand-purple/90 transition-colors shadow-lg hover:shadow-brand-purple/25"
                      >
                          Get Started
                      </button>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 flex justify-center"
                  >
                       {/* Phone Mockup 1 */}
                        <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden">
                            <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black relative">
                                <iframe 
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src="https://www.youtube.com/embed/oxhvW-T3aCM?autoplay=1&mute=1&loop=1&playlist=oxhvW-T3aCM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                ></iframe>
                                <div className="absolute top-0 w-full h-8 bg-black/20 z-10 pointer-events-none"></div>
                            </div>
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-full z-20 pointer-events-none"></div>
                        </div>
                  </motion.div>
              </div>

              {/* Feature Block 2 */}
              <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 flex justify-center"
                  >
                       {/* Phone Mockup 2 */}
                        <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden">
                            <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black relative">
                                <iframe 
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src="https://www.youtube.com/embed/pIAng-OMsUI?autoplay=1&mute=1&loop=1&playlist=pIAng-OMsUI&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                ></iframe>
                                <div className="absolute top-0 w-full h-8 bg-black/20 z-10 pointer-events-none"></div>
                            </div>
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-full z-20 pointer-events-none"></div>
                        </div>
                  </motion.div>
                  <div className="lg:w-1/2 text-left space-y-8">
                      <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 leading-tight">
                          Resources to help you <br/>
                          automate faster.
                      </h2>
                      <div className="w-20 h-1.5 bg-brand-purple rounded-full"></div>
                      <p className="text-xl text-slate-600 leading-relaxed font-light">
                          Explore our expert guides, video tutorials, and templates. We provide everything you need to launch, automate, and scale your business with AI.
                      </p>
                       <ul className="space-y-4">
                         {['Step-by-step Video Tutorials', 'Pre-built Conversation Templates', 'Growth & Scaling Strategies'].map(item => (
                             <li key={item} className="flex items-center gap-3">
                                 <div className="p-1 rounded-full bg-green-100 text-green-600">
                                     <Check size={16} />
                                 </div>
                                 <span className="text-slate-600 font-medium">{item}</span>
                             </li>
                         ))}
                      </ul>
                      <button 
                          onClick={scrollToForm}
                          className="px-8 py-3 bg-brand-purple text-white rounded-full font-bold hover:bg-brand-purple/90 transition-colors shadow-lg hover:shadow-brand-purple/25"
                      >
                          Explore Resources
                      </button>
                  </div>
              </div>
          </div>
      </motion.section>

      {/* 8. FAQ Section */}
      <motion.section 
        id="faq" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-32 bg-slate-50 text-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Sticky Header */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div>
                  <span className="text-brand-purple font-bold tracking-widest text-sm uppercase mb-2 block">
                    SUPPORT
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xl">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-brand-purple/10 rounded-full text-brand-purple">
                         <MessageCircle size={24} />
                      </div>
                      <span className="font-bold text-slate-900 text-lg">Still have questions?</span>
                   </div>
                   <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      Our team is here to help you get started with Perfectplus Ai. We are available 24/7 to answer your queries.
                   </p>
                   <button 
                      onClick={scrollToForm}
                      className="w-full py-3.5 bg-brand-purple text-white font-bold rounded-xl hover:bg-brand-purple/90 transition-all shadow-lg hover:shadow-brand-purple/25 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                   >
                      <Mail size={18} />
                      Get in Touch
                   </button>
                </div>
              </div>
            </div>

            {/* Accordion */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-4"
            >
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <motion.div 
                      variants={itemVariants}
                      key={index} 
                      className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen 
                          ? 'shadow-lg ring-1 ring-brand-purple/50 border-brand-purple/50' 
                          : 'shadow-sm border border-gray-200 hover:border-brand-purple/30 hover:shadow-md'
                      } border`}
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-6 py-6 flex items-start justify-between text-left focus:outline-none bg-white"
                      >
                        <span className={`font-bold text-lg leading-snug pr-4 transition-colors ${isOpen ? 'text-brand-purple' : 'text-slate-900'}`}>
                          {faq.question}
                        </span>
                        <div className={`flex-shrink-0 mt-1 transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                           {isOpen ? (
                              <div className="w-8 h-8 rounded-full bg-brand-purple text-white flex items-center justify-center shadow-lg">
                                 <X size={18} strokeWidth={3} />
                              </div>
                           ) : (
                              <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-brand-purple/10 group-hover:text-brand-purple">
                                 <ChevronDown size={20} strokeWidth={2.5} />
                              </div>
                           )}
                        </div>
                      </button>
                      
                      <div 
                        className={`px-6 text-slate-600 leading-relaxed overflow-hidden transition-[max-height,opacity,padding] duration-500 ease-in-out ${
                          isOpen ? 'max-h-[800px] pb-8 pt-0 opacity-100' : 'max-h-0 pb-0 opacity-0'
                        }`}
                      >
                        <div className="pt-2">
                          {faq.isPricing ? (
                            <div className="space-y-4 bg-slate-50 p-5 rounded-xl border border-slate-100">
                                <ul className="space-y-3">
                                    <li className="flex justify-between items-center border-b border-gray-200 pb-2 last:border-0">
                                       <span className="font-medium text-slate-700">Starter Plan</span>
                                       <span className="font-bold text-slate-900">BDT 2,999</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-gray-200 pb-2 last:border-0">
                                       <span className="font-medium text-slate-700">Standard Plan</span>
                                       <span className="font-bold text-brand-purple">BDT 5,499</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-gray-200 pb-2 last:border-0">
                                       <span className="font-medium text-slate-700">Premium Plan</span>
                                       <span className="font-bold text-slate-900">BDT 9,999</span>
                                    </li>
                                </ul>
                            </div>
                          ) : faq.isList ? (
                            <ul className="space-y-3 pl-2">
                               {faq.items?.map((item, i) => (
                                 <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0"></div>
                                    <span className="text-slate-600">{item}</span>
                                 </li>
                               ))}
                            </ul>
                          ) : (
                            faq.answer
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 9. Let's Get Started Form */}
      <motion.section 
        id="onboarding-form" 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-32 bg-slate-50 border-t border-gray-100 relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-purple/5 blur-[100px] animate-pulse"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px] animate-pulse delay-700"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Let's Get Started</h2>
                <p className="text-lg text-slate-600 mt-4">Fill out the form below to kickstart your AI automation journey.</p>
            </div>

            {/* Tally Embed */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col">
                <div key={tallyKey} className="w-full">
                    <iframe 
                        data-tally-src="https://tally.so/embed/woLOvx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                        loading="lazy" 
                        width="100%" 
                        height="600" 
                        frameBorder="0" 
                        marginHeight={0} 
                        marginWidth={0} 
                        title="Get in Touch"
                        className="w-full"
                    ></iframe>
                </div>
                {/* Submit Another Response Button */}
                <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-center">
                    <button 
                        onClick={handleResetTally}
                        className="px-6 py-2 bg-brand-purple text-white font-bold rounded-full hover:bg-brand-purple/90 transition-colors shadow-md text-sm flex items-center gap-2"
                    >
                        Submit Another Response
                    </button>
                </div>
            </div>
        </div>
      </motion.section>

      {/* Footer-like statement */}
      <section className="py-20 bg-[#F9FAFB] border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">
               Intelligent Workforce, Empowering Humans
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
               Creating AI solutions for your business that help you accelerate growth and scale fast without the overhead.
            </p>
         </div>
      </section>

    </div>
  );
};

export default BDPage;