import React from 'react'
import Pasta from '../assets/Pasta.png'
import Image1 from '../assets/story-assets/yc_blog_thimbnail_f821b729f1.png'
import Image2 from '../assets/story-assets/Web_Kingsley_6701e45a41.png'
import Image3 from '../assets/story-assets/Web_Agam_7215075ed3.png'


const StorySection = () => {

    let Stories = [
        {
            image: Image1,
            title: "Chowdeck Joins Y Combinator's S'22 Batch",
            story: 'Chowdeck has been accepted to Y Combinator’s Summer Batch 2022, joining a league of extraordinary companies that are dis...',
        },
        {
            image: Image2,
            title: "Champions : Kingsley Agbinya",
            story: 'Kingsley, a rider who got promoted to an associate talks about his journey and the biggest change in his life since he j...',
        },
        {
            image: Image3,
            title: "Champions : Anthony Agam",
            story: 'Anthony a.k.a Spider, a Senior Man, shares his life-changing experience and most memorable delivery with Chowdeck.',
        },
    ]

    return (
        <div className='min-h-[100vh] px-[272px]'>
            <div className='flex items-center gap-5'>
                <h1 className='text-[63px] font-bold'>Stories</h1>
                <img src={Pasta} alt="" draggable={false} />
            </div>

            <div className='grid grid-cols-3 gap-10 mt-20'>
                {
                    Stories.map((story) => (
                        <div className='rounded-[12px] border-[3px] border-black w-[389.328125px]'>
                            <div> <img src={story.image} alt="" className='rounded-t-[12px] border-b-[4px]' draggable={false} /> </div>

                            <div className='grid grid-cols-1 gap-4 p-4 text-center'>
                                <h1 className='font-bold text-[16px]'> {story.title} </h1>
                                <p className='text-[18px] h-[101px] w-[351.328125px]'> {story.story} </p>

                                <a href="#" className='bg-[#0C513F0D] py-2 bg-opacity-[5%] text-[#0C513F] mt-5'>
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default StorySection