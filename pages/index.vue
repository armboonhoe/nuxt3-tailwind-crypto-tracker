<!-- pages/index.vue -->
<template>
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                    <h1 class="text-2xl font-semibold text-gray-900 animate-bounce duration-5000">
                        Crypto Tracker
                    </h1>
                    <div class="divide-y divide-gray-200">
                        <ul>
                            <li v-for="(coin, index) in coins" :key="index" class="py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-1">
                                        <h2 class="text-lg font-medium text-gray-900">
                                            {{ coin.name }}
                                        </h2>
                                        <p class="text-sm text-gray-500">
                                            Price: ${{ parseFloat(coin.price).toLocaleString() }}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>

import { ref, onMounted } from 'vue'

useHead({
    title: 'Home',
    meta: [
        {
            name: 'description',
            content: 'ติดตามราคาเหรียญคริปโตแบบเรียลไทม์ด้วย Crypto Tracker ซึ่งให้ข้อมูลราคาล่าสุดของเหรียญคริปโตยอดนิยม'
        },
        {
            name: 'keywords',
            content: 'คริปโต, ราคาคริปโต, ติดตามราคาเหรียญคริปโต, อัตราแลกเปลี่ยน, เงินบาทไทย, ราคาเหรียญ, เรียลไทม์, crypto tracker, cryptocurrency, crypto prices, real-time tracking, THB, Bitcoin, Ethereum, ราคา Bitcoin, ราคา Ethereum'
        }
    ]
})

const coins = ref([])

onMounted(async () => {
    // ฟังก์ชัน fetchData ใช้สำหรับดึงข้อมูลเหรียญคริปโต
    const fetchData = async () => {
        try {
            // กำหนด URL ของ Coinpaprika API
            const apiUrl = 'https://api.coinpaprika.com/v1/tickers'
            // ใช้ fetch เพื่อดึงข้อมูลจาก API
            const response = await fetch(apiUrl)
            // แปลงข้อมูลที่ได้รับเป็น JSON
            const data = await response.json()

            // ตัดข้อมูลให้เหลือเพียง 10 เหรียญแรก
            // และแปลงข้อมูลเหรียญให้เป็นรูปแบบที่เราต้องการ
            coins.value = data.slice(0, 10).map(coin => {
                return {
                    name: coin.name,
                    price: parseFloat(coin.quotes.USD.price).toFixed(2)
                }
            })

        } catch (error) {
            // แสดงข้อผิดพลาดหากเกิดขึ้น
            console.error('Error fetching data:', error)
        }
    }

    // เรียกใช้ฟังก์ชัน fetchData ใน onMounted
    await fetchData()
})

</script>

<style scoped>
@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-30px);
    }

    60% {
        transform: translateY(-15px);
    }
}
</style>
