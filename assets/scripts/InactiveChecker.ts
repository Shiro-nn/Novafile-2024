import { useRouter } from 'nuxt/app'

const router = useRouter()

function onInactive(ms: number, cb: Function) {
    let wait = setTimeout(cb, ms);
    document.onmousemove =
        document.onmousedown =
            document.onmouseup =
                document.onkeydown =
                    document.onkeyup =
                        document.onfocus =
                            function() {
                                clearTimeout(wait);
                                wait = setTimeout(cb, ms);
                            };
}

const ms = 1000 * 60 * 5; // 5mns
onInactive(ms, () => router.push('/'));