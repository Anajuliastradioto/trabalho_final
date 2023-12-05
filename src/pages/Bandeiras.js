import React from 'react';
import Link from 'next/link';
import Topo from '../componentes/Topo';
import Rodape from '../componentes/Rodape'

function Bandeiras({ bandeiras }) {
    return (
        <div>
            <Topo />
            <h2> Lista das Bandeiras </h2>
            {bandeiras.map((bandeira, index) => (
                <Link href='/descricao/[id]' as={`/descricao/${index}`}>
                    <div key={bandeira._id}> 
                    <p> {bandeira.nome} </p> 
                    </div>
                </Link>
            ))}
            <Rodape />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=bandeira')
    const repo = await res.json()
    const bandeiras = await repo;
    return {
        props: { bandeiras }
    }
})

export default Bandeiras;