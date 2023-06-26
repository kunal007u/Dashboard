export interface ILoginModel {
    Email: string;
    Password: string;
}

export interface SidebarProps {
    setIsOpen: (isOpen: boolean ) => void;
    isOpen: boolean | null;

}