import React from 'react';
import PhotoGallery from 'components/PhotoGallery/PhotoGallery';

import marianKroell from 'static/images/marian-kroell-OVXlWNcQV5M-unsplash.jpg';
import wolfgangHasselmann from 'static/images/wolfgang-hasselmann-qcmhNEipNl0-unsplash.jpg';
import yogeshPedamkar from 'static/images/yogesh-pedamkar-vjSbEFUjGuE-unsplash.jpg';
import jonathanBorba from 'static/images/jonathan-borba-fQpzOJXijB4-unsplash.jpg';
import bobJansen from 'static/images/bob-jansen-PoH5pzUL1z0-unsplash.jpg';
import simonMarsault from 'static/images/simon-marsault-Y3cmorOBse0-unsplash.jpg';
import hansVeth from 'static/images/hans-veth-MqLf3K2nt6k-unsplash.jpg';
import harshilGudka from 'static/images/harshil-gudka-OeD4SjY-gMI-unsplash.jpg';
import jerryZhang from 'static/images/jerry-zhang-SJGiS1JzUCc-unsplash.jpg';
import douglasBagg from 'static/images/douglas-bagg-aKvzfLN3UJI-unsplash.jpg';

const photos = [
  { src: marianKroell, alt: 'Photo by Marian Kroell' },
  { src: wolfgangHasselmann, alt: 'Photo by Wolfgang Hasselmann' },
  { src: yogeshPedamkar, alt: 'Photo by Yogesh Pedamkar' },
  { src: jonathanBorba, alt: 'Photo by Jonathan Borba' },
  { src: bobJansen, alt: 'Photo by Bob Jansen' },
  { src: simonMarsault, alt: 'Photo by Simon Marsault' },
  { src: hansVeth, alt: 'Photo by Hans Veth' },
  { src: harshilGudka, alt: 'Photo by Harshil Gudka' },
  { src: jerryZhang, alt: 'Photo by Jerry Zhang' },
  { src: douglasBagg, alt: 'Photo by Gouglas Bagg' }
];

const App = () => (
  <PhotoGallery photos={photos} />
);

export default App;
