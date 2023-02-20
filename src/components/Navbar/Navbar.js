import { CartWidget } from "./CartWidget/CartWidget"

export const Navbar = () => {

    return (
        <div>
            <header className="bg-gray-700">
                <div className="max-[1100px] m-auto pt-0 pb-0 flex justify-around items-center">
                    <a href="#" className=""><img src='./imgs/logo.png' alt='logo' className="m-1 rounded-full max-w-[100px] mb-2"/></a>
                    <nav className="flex items-center justify-center gap-6 space-x-11 rounded-lg text-gray-400">
                        <a className="text-lg " href="#">Máquinas</a>
                        <a className="text-lg " href="#">Tintas</a>
                        <a className="text-lg " href="#">Agujas</a>
                        <a className="text-lg  center" href="#">
                            <CartWidget/>
                        </a>
                    </nav>
                </div>
            </header>
        </div>
    )
}