import { useWindowScroll } from "@uidotdev/usehooks";







export function ScrollY() {

    const [{ x, y }] = useWindowScroll();




    return y


}