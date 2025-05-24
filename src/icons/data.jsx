// Icon components
const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" 
         width="24" 
         height="24" 
         viewBox="0 0 24 24" 
         fill="none" 
         stroke="#000000" 
         strokeWidth="2" 
         strokeLinecap="round" 
         strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);

const PopularIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" 
         width="24" 
         height="24" 
         viewBox="0 0 24 24" 
         fill="none" 
         stroke="#000000" 
         strokeWidth="2" 
         strokeLinecap="round" 
         strokeLinejoin="round">
        <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path>
        <path d="M15 7h6v6"></path>
    </svg>
);

const ExploreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" 
         width="24" 
         height="24" 
         viewBox="0 0 24 24" 
         fill="none" 
         stroke="#000000" 
         strokeWidth="2" 
         strokeLinecap="round" 
         strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const AllIcon = () =>(
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#000000" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round">
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
)
// Navigation items
export const Navigation_Items = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon />
    },
    {
        id: 2,
        title: "Popular",
        icon: <PopularIcon />
    },
    {
        id: 3,
        title: "Explore",
        icon: <ExploreIcon />
    },
    {
        id: 4,
        title: "All",
        icon: <AllIcon />
    },
];