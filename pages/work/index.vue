<template>
    <!-- Experience -->
    <div>
        <h3 class="text-2xl font-bold pb-2">Work</h3>
        <div class="grid gap-5">
            <div class="bg-white rounded-lg shadow-lg flex justify-between">
                <div class="m-10 max-w-xs md:max-w-2xl">
                    <p class="text-2xl font-bold">Reach rw</p>
                    <h2 class="text-lg font-semibold">Role: Full-Stack Developer</h2>
                    <!-- <p class="text-gray-700">Nov.2022 - Aug.2023</p> -->
                    <p class="mt-5 font-semibold">Reach is a company located in Rwanda, now there are soon launching Ride sharing mobile app.</p>
                    <p>Responsibilities:</p>
                    <ul>
                        <li v-for="(responsibility, index) in reach.reachResponsibilities" :key="index">
                          {{++index}}. {{ responsibility }}
                        </li>
                    </ul>
                    
                    <div class="flex items-center my-3">
                        <p class="bg-gray-600 text-white p-1 rounded mr-4" v-for="(technology, index) in reach.technologies" :key="index">
                            #{{ technology }}
                        </p>
                    </div>
                    <p>Check out <a href="https://reach.rw/" target="_blank" class="underline">here</a></p>
                    
                </div>
                <!-- Site Preview -->
                <div class="m-10 max-w-xs md:max-w-2xl">
                    <div class="rounded border border-gray-300 overflow-hidden">
                        <iframe src="https://reach.rw/" frameborder="0" width="100%" height="400px"></iframe>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg flex justify-between">
                <div class="m-10 max-w-xs md:max-w-2xl">
                    <p class="text-2xl font-bold">Soma </p>
                    <h2 class="text-lg font-semibold">Role: Full-Stack Developer</h2>
                    <!-- <p class="text-gray-700">Apr.2022 - Oct.2022</p> -->
                    <p class="mt-5 font-semibold">
                        Soma is a company located in Rwanda, aims to teach society 
                        about traffic rules(Amategeko Y'umuhanda), We have a website which has lessons 
                        materials(videos, pdf docs), quizes related to traffic rules.
                    </p>
                    <p>Responsibilities:</p>
                    <ul>
                        <li v-for="(responsibility, index) in soma.somaResponsibilities" :key="index">
                          {{++index}}. {{ responsibility }}
                        </li>
                    </ul>
                    
                    <div class="flex items-center my-3">
                        <p class="bg-gray-600 text-white p-1 rounded mr-4" v-for="(technology, index) in soma.technologies" :key="index">
                            #{{ technology }}
                        </p>
                    </div>
                    <p>Check out <a href="http://www.soma.rw/" target="_blank" class="underline">here</a></p>

                    <!-- <NuxtLink :to="``" class="inline-block mt-5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition duration-200">
                        View Detailss
                    </NuxtLink> -->
                </div>
                <!-- Site Preview -->
                <div class="m-10 max-w-xs md:max-w-2xl">
                    <div class="rounded border border-gray-300 overflow-hidden">
                        <iframe src="http://www.soma.rw/" frameborder="0" width="100%" height="400px"></iframe>
                    </div>
                    
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg flex justify-between">
                <div class="m-10 max-w-xs md:max-w-2xl">
                    <p class="text-2xl font-bold">Spedition Karen</p>
                    <h2 class="text-lg font-semibold">Role: Backend Developer</h2>
                    <!-- <p class="text-gray-700">Jun.2023 - Jul.2023</p> -->
                    <p class="mt-5 font-semibold">Spedition Karen is a company located in Rwanda, now there are soon launching Ride sharing mobile app.</p>
                    <p>Responsibilities:</p>
                    <ul>
                        <li v-for="(responsibility, index) in spedition.speditionResponsibilities" :key="index">
                          {{++index}}. {{ responsibility }}
                        </li>
                    </ul>
                    
                    <div class="flex items-center my-3">
                        <p class="bg-gray-600 text-white p-1 rounded mr-4" v-for="(technology, index) in spedition.technologies" :key="index">
                            #{{ technology }}
                        </p>
                    </div>
                    <p>Check out <a href="https://www.speditionkaren.com/" target="_blank" class="underline">here</a></p>

                    <!-- <NuxtLink :to="``" class="inline-block mt-5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition duration-200">
                        View Detailss
                    </NuxtLink> -->
                </div>
                <!-- Site Preview -->
                <div class="m-10 max-w-xs md:max-w-2xl">
                    <div class="rounded border border-gray-300 overflow-hidden">
                        <iframe src="https://www.speditionkaren.com/" frameborder="0" width="100%" height="400px"></iframe>
                    </div>
                    
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg flex justify-between">
                <div class="m-10 max-w-xs md:max-w-2xl">
                    <p class="text-2xl font-bold">Young Wommen Mentors Network</p>
                    <h2 class="text-lg font-semibold">Role: Backend Developer</h2>
                    <!-- <p class="text-gray-700">Nov.2022 - Dec.2022</p> -->
                    <p class="mt-5 font-semibold">Today YWMNet brings together a team of multidisciplinary Experts and professionals made up of Senior and Chief mentors, 
                        Social worker practitioners, Medical practitioners, Counselors, Gender activists, 
                        Public Health &Preventive Medicine experts, lawyers, healthcare professionals, Economists, 
                        Administrators, psychotherapists, researchers, Entrepreneurs; volunteers, peer educators, 
                        and most importantly dedicated young women and men development activists working in a network at Local, 
                        Regional and International levels.
                    </p>
                    <p>Responsibilities:</p>
                    <ul>
                        <li v-for="(responsibility, index) in spedition.speditionResponsibilities" :key="index">
                          {{++index}}. {{ responsibility }}
                        </li>
                    </ul>
                    
                    <div class="flex items-center my-3">
                        <p class="bg-gray-600 text-white p-1 rounded mr-4" v-for="(technology, index) in spedition.technologies" :key="index">
                            #{{ technology }}
                        </p>
                    </div>
                    <p>Check out <a href="https://www.youngwomenmentors.org/" target="_blank" class="underline">here</a></p>

                    <!-- <NuxtLink :to="``" class="inline-block mt-5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition duration-200">
                        View Detailss
                    </NuxtLink> -->
                </div>
                <!-- Site Preview -->
                <div class="m-10 max-w-xs md:max-w-2xl">
                    <div class="rounded border border-gray-300 overflow-hidden">
                        <iframe src="https://www.youngwomenmentors.org/" frameborder="0" width="100%" height="400px"></iframe>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
    
    <div>
        <h3 class="text-2xl font-bold pb-2">Training, Coding Bootcamps</h3>
        <div class="grid gap-5">
            <div class="bg-white rounded-lg shadow-lg flex justify-between">
                <div class="m-10 max-w-xs md:max-w-2xl">
                    <p class="text-2xl font-bold">ALX-Africa Udacity, U.S</p>
                    <h2 class="text-lg font-semibold">Role: Cloud Developer Trainee</h2>
                    <p class="text-gray-700">Jul.2022 - Oct.2022</p>
                    <p class="mt-5 font-semibold">ALX-Africa is a Worlwide based technology company which aims to upskill and enhance abilities of young african talents in technology.</p>
                    <p>Responsibilities:</p>
                    <ul>
                        <li v-for="(responsibility, index) in alx.alxResponsibilities" :key="index">
                          {{++index}}. {{ responsibility }}
                        </li>
                    </ul>
                    
                    <div class="flex items-center my-3">
                        <p class="bg-gray-600 text-white p-1 rounded mr-4" v-for="(technology, index) in alx.technologies" :key="index">
                            #{{ technology }}
                        </p>
                    </div>
                    <p>Check out <a href="https://drive.google.com/file/d/1wY_owVDmiwJ0bZRmKgBI25fiu5A3ZBZq/preview" target="_blank" class="underline">here</a></p>
                </div>
                <!-- Site Preview -->
                <div class="m-10 max-w-xs md:max-w-2xl">
                    <div class="rounded border border-gray-300 overflow-hidden">
                        <iframe src="https://drive.google.com/file/d/1wY_owVDmiwJ0bZRmKgBI25fiu5A3ZBZq/preview" frameborder="0" width="100%" height="400px"></iframe>
                    </div>
                    
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg flex justify-between">
                <div class="m-10 max-w-xs md:max-w-2xl">
                    <p class="text-2xl font-bold">PositiveO</p>
                    <h2 class="text-lg font-semibold">Role: Apprenticee</h2>
                    <p class="text-gray-700">Sept.2022 - Dec.2022</p>
                    <p class="mt-5 font-semibold">PositiveO is a non-profit organization located in  Nigeria, which aims to help people through counselling via their mobile app.</p>
                    <p>Responsibilities:</p>
                    <ul>
                        <li v-for="(responsibility, index) in positiveO.positiveOResponsibilities" :key="index">
                          {{++index}}. {{ responsibility }}
                        </li>
                    </ul>
                    
                    <div class="flex items-center my-3">
                        <p class="bg-gray-600 text-white p-1 rounded mr-4" v-for="(technology, index) in positiveO.technologies" :key="index">
                            #{{ technology }}
                        </p>
                    </div>
                    <!-- <p>Check out <a href="https://drive.google.com/file/d/1Ul-7AeFcM0LJx-6Ew49dn0NgiB7va23m/preview" target="_blank" class="underline">here</a></p> -->
                </div>
                <!-- <div class="m-10 max-w-xs md:max-w-2xl">
                    <div class="rounded border border-gray-300 overflow-hidden">
                        <iframe src="https://drive.google.com/file/d/1Ul-7AeFcM0LJx-6Ew49dn0NgiB7va23m/preview" frameborder="0" width="100%" height="400px"></iframe>
                    </div>
                    
                </div> -->
            </div>   
            
            <div class="bg-white rounded-lg shadow-lg flex justify-between">
                <div class="m-10 max-w-xs md:max-w-2xl">
                    <p class="text-2xl font-bold">Andela</p>
                    <h2 class="text-lg font-semibold">Role: Andela ATLP Trainee</h2>
                    <p class="text-gray-700">Feb.2022 - Dec.2022</p>
                    <p class="mt-5 font-semibold">Andela is Worlwide company which has branch in Rwanda, which aims to raise young Rwandan abilities especially in technology fields, they have 9-month intensive software development bootcamp.</p>
                    <p>Responsibilities:</p>
                    <ul>
                        <li v-for="(responsibility, index) in andela.andelaResponsibilities" :key="index">
                          {{++index}}. {{ responsibility }}
                        </li>
                    </ul>
                    
                    <div class="flex items-center my-3">
                        <p class="bg-gray-600 text-white p-1 rounded mr-4" v-for="(technology, index) in andela.technologies" :key="index">
                            #{{ technology }}
                        </p>
                    </div>
                    <p>Check out <a href="https://drive.google.com/file/d/1Ul-7AeFcM0LJx-6Ew49dn0NgiB7va23m/preview" target="_blank" class="underline">here</a></p>
                </div>
                <div class="m-10 max-w-xs md:max-w-2xl">
                    <div class="rounded border border-gray-300 overflow-hidden">
                        <iframe src="https://drive.google.com/file/d/1Ul-7AeFcM0LJx-6Ew49dn0NgiB7va23m/preview" frameborder="0" width="100%" height="400px"></iframe>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
    <Footer />
</template>

<script setup>
    const reach = {
        reachResponsibilities: [
            "Designed Database Schemas of the application.",
            "Implementing backend logic and APIs for allowing frontend to communicate with the application.",
            "Third-Party APIs integration such as Payment gateway, Google Maps etc..",
            "Develop User Interfaces using modern JavaScript Framework(VueJS and NuxtJS).",
            "Automate Deployment process with aid of CI/CD Tools."
        ],
        technologies: ['JavaScript', 'NodeJs', 'NuxtJs']
    }

    const spedition = {
        speditionResponsibilities: [
            "Designed Database Schemas of the application.",
            "Developed APIs for controlling access, sending inquiries and content management of the website.",
            "Website Deployment and Domain name mapping."
        ],
        technologies: ['NodeJs']
    }

    const soma = {
        somaResponsibilities: [
            "Designed Database Schemas of the application.",
            "Developed APIs for controlling access, sending inquiries and content management of the website.",
            "Website Deployment and Domain name mapping."
        ],
        technologies: ['NodeJs', 'ReactJs']
    }

    const alx = {
        alxResponsibilities: [
            "Refactored Monolith applications to Microservices.",
            "Develop and Deploy Serverless application to AWS.",
            "Automate deployment using CI/CD tools (GitHub Actions and Travis CI).",
            "Docker and Container orchestration with Kubernetes.",
            "Integrate AUTHO APIs for Authorization and Authentication."
        ],
        technologies: ['Kubernetes', 'AWS', 'NodeJS', 'TypeScript', 'Docker', 'AUTHO']
    }

    const andela = {
        andelaResponsibilities: [
            "Developed and Deployed portfolio website for personal branding.",
            "Implement Test Driven approach on both backend and frontend of the application.",
            "App Dockerization and Containers.",
            "Automate deployment using CI/CD tools (GitHub Actions and Circle CI).",
            "Docker and Container orchestration with Kubernetes.",
            "Do Technical Documentation for future use."
        ],
        technologies: ['JavaScript', 'NodeJs', 'ReactJs', 'Mocha/Chai', 'Jest', 'Docker']
    }

    const positiveO = {
        positiveOResponsibilities: [
            "Developed Mobile User interfaces with React Native.",
            "Refactored codebase",
            "Do Technical Documentation for future use."
        ],
        technologies: ['React Native']
    }

</script>
<style>
  .card-container {
    position: relative;
  }
  
  .card-image {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }
  
  .card-text {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    padding: 20px;
    z-index: 2;
  }
</style>