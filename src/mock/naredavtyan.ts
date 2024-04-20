import { DataType } from "@/app/page";

export const naredavtyanData: DataType = {
  id: 2,
  meta: {
    title: 'Nare Davtyan',
    description: 'Nare Davtyan - Portfolio',
  },
  general: {
    title: 'Nare Davtyan',
  },
  banner: [
    {id: 1, url: 'images/naredavtyan/video-1.mp4', alt: 'naredavtyan-video-1'},
  ],
  params: [
    {id: 1, label: 'Height:', value: '1.75'},
    {id: 2, label: 'Bust:', value: '86'},
    {id: 3, label: 'Waist:', value: '69'},
    {id: 4, label: 'Hips:', value: '94'},
  ],
  portfolio: [
    {id: 1, url: 'images/naredavtyan/img-1.jpg', alt: 'naredavtyan-1', order: 1},
    // {id: 2, url: 'images/naredavtyan/img-2.jpg', alt: 'naredavtyan-2', order: 2},
    {id: 3, url: 'images/naredavtyan/img-3.jpg', alt: 'naredavtyan-3', order: 3},
    {id: 4, url: 'images/naredavtyan/img-4.jpg', alt: 'naredavtyan-4', order: 4},
    {id: 5, url: 'images/naredavtyan/img-5.jpg', alt: 'naredavtyan-5', order: 5},
    {id: 6, url: 'images/naredavtyan/img-6.jpg', alt: 'naredavtyan-6', order: 6},
    {id: 7, url: 'images/naredavtyan/img-7.jpg', alt: 'naredavtyan-7', order: 7},
    {id: 8, url: 'images/naredavtyan/img-8.jpg', alt: 'naredavtyan-8', order: 8},
    {id: 11, url: 'images/naredavtyan/img-11.jpg', alt: 'naredavtyan-11', order: 11},
    // {id: 9, url: 'images/naredavtyan/img-9.jpg', alt: 'naredavtyan-9', order: 9},
    {id: 10, url: 'images/naredavtyan/img-10.jpg', alt: 'naredavtyan-10', order: 10},
    // {id: 12, url: 'images/naredavtyan/img-12.jpg', alt: 'naredavtyan-12', order: 12},
  ],
  bio: {
    media: {
      id: 13, 
      url: 'images/naredavtyan/img-13.jpg', 
      alt: 'naredavtyan-13',
    },
    content: `Hey, I'm Nare Davtyan, represented by WOT Models in Yerevan. 
    Fashion is my passion, and I've walked the runways of Paris to Yerevan, embracing diversity every step of the way. 
    Let's collaborate on something extraordinary. 
    Reach out via Instagram or WOT Models to make magic happen!`
  },
  contacts: [
    {id: 1, type: 'email', value: 'naredavtyan@gmail.com', order: 1},
    {id: 2, type: 'phone', value: '+37499663322', order: 2},
    {id: 3, type: 'instagram', value: '@narreverse', order: 3},
  ],
};