import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Titulo from '../components/TituloContato'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import IMG1 from '../assets/img-1.jpg'

const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Subtitle = styled.h1`
    margin-top: 5%;
    margin-bottom: 0;
    color: #508E9D;
    text-align: center;
    font-size: 200%;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; 

    @media (max-width: 1000px) {
        font-size: 150%; 
    }
`
const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 5% 0;
`
const FormContainer = styled.div`

`
const Icon = styled.div`
    margin:10px;
`
const Image = styled.img`
    margin: 1em;
    width: 450px;
    height: 550px;
    object-fit: cover;
    border-radius: 10%;
    border: 5px solid #508E9D;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

function Contato(){
    return(
        <div>
            <Header/>
            <Titulo/>
            <Container>
                <div><Image src={IMG1}/></div>
                <FormContainer>
                    <Subtitle>Precisa de Ajuda? Estamos Aqui!</Subtitle>
                    <ContactForm/>
                    <SocialMediaContainer>
                        <Icon><a href='https://www.instagram.com/adoteumbichinhorj/'><FaInstagram size={50}style={{ color: '#508E9D' }}/></a></Icon>
                        <Icon><a href='https://www.facebook.com/Adoteumbichinhorjj/'><FaFacebook size={50} style={{ color: '#508E9D' }}/></a></Icon>
                    </SocialMediaContainer>
                </FormContainer>
            </Container>
            <Footer/>
        </div>
    );
}
export default Contato



// import React from 'react'
// import styled from 'styled-components'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import Titulo from '../components/TituloContato'

// const FormContainer = styled.div`
// display: flex;
// justify-content: center;
// `

// const Input = styled.input`
// width: 31.25rem;
// height: 3.125rem;
// `
// const Textarea = styled.textarea`
// width: 500px;
// `
// export const Forms = () => {
//     return (
//         <div>
//             <h1>Fale Conosco</h1>
//             <form action="">
//                 <div>
//                     <p>Nome</p>
//                     <Input type="text" required />
//                 </div>
//                 <div>
//                     <p>E-mail</p>
//                     <Input type="email" required />
//                 </div>
//                 <div>
//                     <p>Assunto</p>
//                     <Textarea name="Assunto" cols="20" rows="10"></Textarea>
//                 </div>
//                 <div>
//                     <Input type="submit" value="Enviar" />
//                 </div>
//             </form>
//         </div>
//     );
// };



// function Contato(){
//     return(
//         <div>
//             <Header/>
//             <Titulo/>
//             <FormContainer><Forms/></FormContainer>
//             <Footer/>
//         </div>
//     )
// }
// export default Contato