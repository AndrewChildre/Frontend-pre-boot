import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	toptitle: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: 'blue',
		background: 'red',
		width: '100vw',
		marginTop: 0,
	},
	bodyColors: {
		color: 'white',
		background: 'blue',
	},
	subTitle: {
		marginTop: 70,
		paddingBottom: 30,
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid
				className={classes.bodyColors}
				container
				spacing={0}
				direction='column'
				alignItems='center'
				justify='center'
				style={{ minHeight: '90vh' }}>
				<Grid item xs={12}>
					<Paper className={classes.toptitle}>
						<Typography variant='h3'>Leadership</Typography>
					</Paper>
				</Grid>
				<Grid className={classes.subTitle} item xs={6}>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJSoQVS7W6R2ywENCKUeTm4dgRioNX2iIHhA&usqp=CAU'
						alt='moto'
					/>
				</Grid>
				<Grid item xs={6}>
					<Typography className={classes.subTitle} variant='h3'>
						Justice
					</Typography>
					<Typography variant='h6'>
						Justice is the practice of being fair and consistent. A just person
						gives consideration to each side of a situation and bases rewards or
						punishments on merit. As good leaders, we have to hold people
						accountable. We have to show that if you do good, you get good
						things. If you do bad, you will be held accountable.
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography className={classes.subTitle} variant='h3'>
						Judgment
					</Typography>{' '}
					<Typography variant='h6'>
						Often, leaders must assess situations quickly and without
						significant time to reflect. The Marine Corps refers to the “70
						Percent Solution,” meaning an imperfect solution that can be acted
						upon quickly, rather than waiting for the perfect judgment – which
						may never come. This guideline doesn’t advise acting in extreme
						haste; rather, it advises avoiding “analysis Paralysis.” It argues
						that with 70 percent of the possible knowledge, having completed 70
						percent of the analysis, and with a confidence rate of about 70
						percent, the time is right to make an informed judgment.
					</Typography>
				</Grid>

				<Grid item xs={6}>
					<Typography className={classes.subTitle} variant='h3'>
						Dependability
					</Typography>
					<Typography variant='h6'>
						Amidst the stress and chaos of combat, there often is no telling how
						people will react. A hero one day may be a catatonic wreck the next.
						Some would say that’s perfectly understandable. Marines say that’s
						totally unacceptable. Marines demand dependability in all situations
						– on and off the battlefield. Leaders have consistency in crisis and
						do not over commit. They do what they say they’ll do when they say
						they’ll do it.
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography className={classes.subTitle} variant='h3'>
						Initiative
					</Typography>
					<Typography variant='h6'>
						Find a way to take the initiative; don’t do it for the recognition
						or for the glory, do it to help accomplish the mission. Think
						outside the box, try new things, and consider new solutions to
						existing problems. Improvise, Adapt, Overcome!
					</Typography>
				</Grid>

				<Grid item xs={6}>
					<Typography className={classes.subTitle} variant='h3'>
						Decisiveness
					</Typography>{' '}
					<Typography variant='h6'>
						Research indicates that most people make decisions intuitively
						rather than analytically more than 90 percent of the time. The
						Handbook for Marine NCOs has the following advice for modern
						Marines: “Make sound and timely decisions. TO make a sound decision,
						you should know your mission, what you are capable of doing to
						accomplish it, what means you have to accomplish it, and what
						possible impediments or obstacles exist (in combat, these would be
						enemy capabilities) that might stand in the way. Timeliness is also
						important as soundness. In many military situations, a timely,
						though inferior, decision is better than a long-delayed
						theoretically correct, decision.
					</Typography>
				</Grid>

				<Grid item xs={6}>
					<Typography className={classes.subTitle} variant='h3'>
						Tact
					</Typography>
					<Typography variant='h6'>
						Tact is the ability to communicate in the language that best allows
						a listener to understand the message or meaning that’s being
						communicated and to be motivated to act upon it. Given that
						background, the tactful leader chooses the language or behavior that
						will help the people in his audience to motivate themselves. Tact is
						the ability to say something or make a point in such a way that not
						only is the other person not offended; they are totally receptive.
						Being tactful comes with training and maturity but it’s also
						determined by making the right decisions – the right decisions about
						what to say, when to say it, how to say it, and who to say it to.
					</Typography>
				</Grid>

				<Grid className={classes.subTitle} item xs={6}>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpVNzCMwM8oJ8txpIeT-2Yj5e8Q0ckQBa8g&usqp=CAU'
						alt='moto'
					/>
				</Grid>
				<Grid item xs={6}>
					<Typography className={classes.subTitle} variant='h3'>
						Integrity
					</Typography>
					<Typography variant='h6'>
						Integrity in a leader is reflected by honesty as well as a desire to
						inspire and a devotion of values that the leader constantly tried to
						communicate to those he or she leads. The leader with integrity can
						rarely if ever relax a commitment to what he or she believes is the
						behavior that best reflects those closely held values. When
						followers see leaders acting with integrity, they are more likely to
						want to emulate that quality. Integrity is the cornerstone of
						leadership. There’s only one thing that no one can take away from
						you. They can take your life, they can take your savings, they can
						take your property, they can take everything you’ve got… but the one
						thing no one can take from you is you integrity, your honor. You
						have to voluntarily give that up. You’re the owner of your
						integrity. And some people sell it awfully cheap.
					</Typography>
				</Grid>

				<Grid item xs={6}>
					<Typography className={classes.subTitle} variant='h3'>
						Endurance
					</Typography>
					<Typography variant='h6'>
						The enduring leader defaults to responsibility. If something must be
						done, then it must be done, even if the best resources or relevant
						training aren’t available. During the battle of Guadalcanal, Marine
						John Basilone exemplified endurance when he manned his machine gun
						non-stop for three days and nights without sleep, rest, or food
						stalling the efforts of an entire enemy regiment. At the end of the
						battle, only three Marines from Basilone’s machinegun crew were
						still standing. Basilone endured with a pair of burned hands.
						Basilone’s asbestos gloves had been lost in the chaos and he used
						his bare hands to handle the hot guns.
					</Typography>
				</Grid>

				<Grid item xs={6}>
					<Typography className={classes.subTitle} variant='h3'>
						Bearing
					</Typography>
					<Typography variant='h6'>
						A Marine with bearing is driven toward a goal with purpose, jumping
						at opportunities with self-improvement that increase his ability to
						reach that goal. Bearing is about channeling that drive to other
						people. Leaders with bearing know where they stand, and they
						understand the environment in which they work. They set an example
						for others to follow in both attitude and behavior.
					</Typography>
				</Grid>

				<Grid item xs={6}>
					<Typography className={classes.subTitle} variant='h3'>
						Unselfishness
					</Typography>
					<Typography variant='h6'>
						Unselfish leaders make decisions that benefit as many as possible,
						without worrying too much about themselves. They look out for the
						welfare of their teams beyond simple job descriptions, legal
						concerns, and even their own personal comfort. And they do this most
						particularly in difficult situations.
					</Typography>
				</Grid>

				<Grid item xs={6}>
					<Typography className={classes.subTitle} variant='h3'>
						Courage
					</Typography>
					<Typography variant='h6'>
						Courage is never an easy commodity to find, whether it’s
						disciplining a subordinate, standing up to superiors, or facing
						swarms of charging enemies. Courage is situational; it lives in the
						moments when it is required by people who believe in themselves and
						in priorities beyond personal comfort and the risks of pain or
						failure. Courage is doing what’s right, adhering to a higher
						standard of personal conduct; to lead by example and to make tough
						decisions under stress and pressure. It is the inner strength that
						enables a Marine to take that extra step.
					</Typography>
				</Grid>

				<Grid item xs={6}>
					<Typography className={classes.subTitle} variant='h3'>
						Knowledge
					</Typography>
					<Typography variant='h6'>
						The business of knowing what to do and how to do it lifts the leader
						above the crowd. Knowledge goes beyond the facts of the job; it is
						also knowledge of your team: who they are and what motivates them.
						It is knowledge of the culture in which you work, so that you
						understand what your superior’s goals and missions are. And is also
						is self-knowledge: unflinchingly knowing your own strengths and
						weaknesses, and having a desire to excel. Sharing knowledge with
						subordinates can feel to some leaders as though they are giving up
						control, and they may be loathe to do so. In reality, though,
						leaders are not effective because they are the knowledge holders.
						Rather, the best leaders are the ones who make knowledge available
						to their teams and understand how best to deploy that knowledge in
						the best possible manner.
					</Typography>
				</Grid>

				<Grid item xs={6}>
					<Typography className={classes.subTitle} variant='h3'>
						Enthusiasm
					</Typography>
					<Typography variant='h6'>
						When we’re enthusiastic about something, we’re willing to sacrifice
						for it. People who are enthusiastic about a cause will sacrifice
						time and money for it. People who are enthusiastic about their jobs
						will make personal sacrifices to spend time at work and educate
						themselves to do a better job. Men and women who are enthusiastic
						about being Marines understand that sacrifice might come at a very
						high price. Even when the requirements are difficult, enthusiastic
						leaders set aside any negative aspects of the mission and focus on
						the positive energy they can bring to the table. It’s not easy. It
						takes more than a little self-discipline. But it works, and a show
						of enthusiasm often leads to truly inspirational behavior.
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}
