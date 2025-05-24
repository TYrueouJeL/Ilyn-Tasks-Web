import TaskCard from './TaskCard';

export default function TaskList({tasks}) {
    const cards = tasks.map(task => <TaskCard key={task.id} task={task} />);

    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-4 ml-2 mr-2">
            {cards}
        </section>
    );
}