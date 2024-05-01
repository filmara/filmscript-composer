interface LoaderProps {

}
const Loader: React.FC<LoaderProps> = () => {

    return (
        <div className="flex justify-center items-center">
            <div className="loader"></div>
        </div>
    );
};

export { Loader };