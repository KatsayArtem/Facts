<script lang='ts'>
    import { datas } from "../../data/datas";
    import '../style/style.scss'
    import { onMount } from 'svelte'
	import Popup from "../popup/Popup.svelte";

    onMount(() => {
        const li = document.querySelectorAll('li')
        li[4].classList.add('is-active')
        li[9].classList.add('is-active')
    })
</script>


<main class="main" style="background: linear-gradient(270deg, rgba({datas[4].color}) 0%, rgba(255, 255, 255, 0) 100%);">
        <img style="right: -600px;" src={datas[4].background} alt=''>
        <Popup/>
        <section class="container">
            <nav class="nav">
                <ul class="nav__ul" >
                    {#each datas as data}
                        <a href="{data.router}">
                            <li>
                                <span style="color: {data.color_router_name};">{data.router_name}</span>
                            </li>
                        </a>
                    {/each}
                </ul>
            </nav>
            <h1 class="contacts">{datas[4].router_name}</h1>
            <div class="contact_block">
                <div>
                    <a class="media media-gh" href="https://github.com/KatsayArtem" target="_blank" rel="noreferrer">
                        <span>GitHub</span>
                        <div class="gh"></div>
                    </a>
                    <a class="media media-tg" href="https://web.telegram.org/z/" target="_blank" rel="noreferrer">
                        <span>Telegram</span>
                        <div class="tg"></div>
                    </a>
                </div>
                    <div class="stick"></div>
                    <a class="media media-em" href="https://mail.yandex.ru" target="_blank" rel="noreferrer">
                        <div class="em"></div>
                        <span>Email</span>
                    </a>
            </div>
        </section>
</main>