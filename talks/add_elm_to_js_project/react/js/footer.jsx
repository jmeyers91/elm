/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */
var app = app || {};
import Elm from 'react-elm-components'


(function () {
	'use strict';

	app.TodoFooter = React.createClass({
		render: function () {
			var activeTodoWord = app.Utils.pluralize(this.props.count, 'item');
			var clearButton = null;

			var elmApp = (
				<div className="elm">
				</div>
			);

			var nowShowing = this.props.nowShowing;
			return (
				<footer className="footer">
					<span className="todo-count">
						<strong>{this.props.count}</strong> {activeTodoWord} left
					</span>
					<ul className="filters">
						<li>
							<a
								href="#/"
								className={classNames({ selected: nowShowing === app.ALL_TODOS })}>
								All
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/active"
								className={classNames({ selected: nowShowing === app.ACTIVE_TODOS })}>
								Active
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/completed"
								className={classNames({ selected: nowShowing === app.COMPLETED_TODOS })}>
								Completed
							</a>
						</li>
					</ul>
					{elmApp}
				</footer>
			);
		}
	});
})();
