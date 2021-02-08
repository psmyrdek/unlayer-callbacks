export default function langToLocale(lang) {
    switch (lang) {
        case 'pl':
        case 'pl-PL':
            return 'pl-PL'
        case 'pt':
        case 'pt-BR':
            return 'pt-BR'
        case 'en':
        default:
            return 'en-US'
    }
}