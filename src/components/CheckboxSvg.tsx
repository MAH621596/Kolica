const CheckboxIcon = () => {
    return (
        <svg
            className="
            absolute top-0 bottom-0 left-0 right-0 m-auto
            w-3 h-2
            hidden peer-checked:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <polyline points="25 3 9 24 4 12"></polyline>
        </svg>
    )
}

export default CheckboxIcon;