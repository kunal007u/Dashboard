import { IconDefinition, faBars, faChartLine, faChartPie, faChevronDown, faChevronLeft, faChevronUp, faCircleNotch, faComment, faDownLeftAndUpRightToCenter, faG, faGauge, faGear, faLandmark, faMagnifyingGlassChart, faShop, faStar, faStarHalf, faStarHalfStroke, faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ----------------------------- Sidebar Icon --------------------------//
  const iconMapping: Record<string, IconDefinition> = {
    Dashboard: faGauge,
    Users: faUser,
    UserWallet: faWallet,
    Markets: faShop, // Added icon for Markets
    MarketResults: faChartLine, // Added icon for MarketResults
    WithdrawalRequest: faLandmark,
    MarketProfitLoss: faUser,
    Settings: faGear,
    StarLineMarkets: faStar,
    Feedback: faComment,
    Analysis: faChartPie,
    DebitCreditAnalysis: faMagnifyingGlassChart
};

export const GenerateIcon = (icon: string): JSX.Element | null => {
    const selectedIcon = iconMapping[icon];

    if (selectedIcon) {
        return <FontAwesomeIcon icon={selectedIcon} />;
    }

    return null;
};