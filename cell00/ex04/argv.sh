#!/bin/bash
if [ $# == 0 ]
then
	echo "No arguments supplied";
else
	if [ ! -z "$1" ]
	then
		echo $1
	fi
	if [ ! -z "$2" ]
	then
		echo $2
	fi
	if [ ! -z "$3" ]
	then
		echo $3
	fi
fi
