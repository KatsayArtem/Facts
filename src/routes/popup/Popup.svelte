<script lang='ts'>
    import { datas } from "../../data/datas";
    import '../style/style.scss'
    import { onMount } from 'svelte'

    onMount(() => {

        const hamb: HTMLElement | null = document.getElementById("hamb");
        const popup: HTMLElement | null = document.getElementById("popup");
        const bars:NodeListOf<HTMLLIElement> = document.querySelectorAll('.bar') 

        if (hamb && popup && bars) {
            hamb.addEventListener("click", (e) => {
                e.preventDefault();
                popup.classList.toggle("open");
                bars[0].classList.toggle('hidden')
                bars[1].classList.toggle('cross')
                bars[2].classList.toggle('cross-down')
                hamb.classList.toggle('top')
            });
        }
    })
</script>

<div class="hamb" id="hamb">
    <div>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
</div>
<div class="popup" id="popup">
    <ul class="nav__ul" >
        {#each datas as data}
            <a class="a-popup" href="{data.router}">
            <li class="li-popup">
                <span style="color: {data.color_router_name};">{data.router_name}</span>
            </li>
            </a>
        {/each}
    </ul>
</div>