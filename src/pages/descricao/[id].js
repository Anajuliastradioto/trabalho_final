import home from '../../styles/Home.module.css';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

function Descricao({ bandeira = {} }) {
    return (
        <div>
            <Topo />
            <p className='desc'>Nome: {bandeira.nome}</p>
            <p className='desc'>Usuário: {bandeira.usuario}</p>
            <p className='desc'>Descrição: {bandeira.descricao}</p>
            <Rodape />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=bandeira')
    const repo = await res.json()
    const bandeira = await repo[context.params.id];
    return {
        props: { bandeira }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=bandeira')
    const repo = await res.json()
    const bandeiras = await repo;
    const paths = bandeiras.map((bandeira, index) => {
        return {params:{id:String(index)}};
    })
    return {
        paths,
        fallback: false,
    };
}

export default Descricao;