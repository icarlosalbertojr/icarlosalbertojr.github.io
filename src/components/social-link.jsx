export default function SocialLink ({ text, href, background, backgroundHover, icon, darkText }) {
    return (
        <a href={href} className={` ${darkText ? "text-slate-950" : "text-slate-100"} bg-${background} hover:bg-${backgroundHover} w-2/3 rounded py-2 font-bold text-center flex justify-center items-center space-x-2`}>
            { icon }
            <span>{text}</span>
        </a>
    )
}