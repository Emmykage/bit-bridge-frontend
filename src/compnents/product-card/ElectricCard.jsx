import PropTypes from 'prop-types'

const ElectricCard = ({id, description,name, image, onClick}) => {

    return (
    <div onClick={onClick} key={id} className="cursor-pointer border border-alt p-5 rounded-lg flex gap-4">
    <img src={image} className="w-16 h-16" alt="name" />
    <div>
        <p>{name}</p>
        <p>{description}</p>

    </div>
</div>  )
}

ElectricCard.propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    onClick: PropTypes.func,
}

export default ElectricCard