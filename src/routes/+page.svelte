<script lang='ts'>
    import { datas } from "../data/datas";
    import './style/style.scss'
    import { onMount } from 'svelte'
	import Popup from "./popup/Popup.svelte";


    onMount(() => {
        const li:NodeListOf<HTMLLIElement> = document.querySelectorAll('li')
        li[0].classList.add('is-active')
        li[5].classList.add('is-active')
    })

</script>


<main class="main" style="background: linear-gradient(270deg, rgba({datas[0].color}) 0%, rgba(255, 255, 255, 0) 100%);">
        <img src={datas[0].background} alt=''>
        <Popup/>
        <section class="container">
            <nav class="nav" id="menu">
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
            <div class="info_block">
                <div class="block_title">
                    <h1>Интересные факты о {datas[0].title}</h1> 
                </div>
            <div class="ds">
                <div>
                    <h2>
                        {datas[0].text_1}
                    </h2>
                </div>
                <div>
                    <h2>
                        {datas[0].text_2}
                    </h2>
                </div>
            </div>
                <div class="key_facts_block">
                    <h3>Ключевые факты {datas[0].title}</h3>
                </div>
            <div class="blocks">
            {#each datas[0].facts as fact}
                <div>
                    <p>{fact}</p>
                </div>
            {/each}
            </div>
            </div>
        </section>
</main>
