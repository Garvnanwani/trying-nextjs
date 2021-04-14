
const Header = () => {
    const x = 2
    return (
        <div>
            <h1 className='title'>This is a header</h1>

            <style jsx>
                {`
                    .title {
                        color: ${x > 3 ? 'red' : 'blue'}
                    }
                `}
            </style>
        </div>
    )
}

export default Header
