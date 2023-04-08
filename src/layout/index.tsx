import LayoutUtils from './../utils/components/Layout';

import Container from '../components/Container';
import Button from '../components/Button';
import Subject from '../components/Subject';
import PossibleSchedules from '../components/PossibleSchedules';
import FormSubjects from '../components/FormSubjects';

function Layout() {
	const {
		subjects,
		possibleSchedules,
		createPossibleSchedules,
		clearPossibleSchedules,
		addSubject,
		addSchedule,
		deleteSubject,
	} = LayoutUtils();

	return (
		<Container>
			<header>
				<h1 className='text-3xl font-bold underline'>Aplicacion horarios</h1>
			</header>

			<main>
				<FormSubjects subjects={subjects} addSchedule={addSchedule} addSubject={addSubject} />
				<br />
				{subjects && (
					<>
						<h2 className='text-3xl font-bold'>Tus materias y sus posibles horarios:</h2>
						<ul>
							{subjects.map((subject) => (
								<Subject data={subject} deleteSubject={deleteSubject} key={subject.id} />
							))}
						</ul>
					</>
				)}
				<div className='mt-5'>
					<Button type='button' color='green' onClick={createPossibleSchedules}>
						Generar horarios
					</Button>
					<Button type='button' theme='outline' color='purple' onClick={clearPossibleSchedules}>
						Limpiar horarios
					</Button>
				</div>

				<section>
					{possibleSchedules && (
						<>
							<PossibleSchedules data={possibleSchedules} />
						</>
					)}
				</section>
			</main>
		</Container>
	);
}

export default Layout;
