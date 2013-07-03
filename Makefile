build :
	mkdir build
	cp -r _attachments	build
	cp -r filters	build
	cp -r views build
	cp -r README.md build
	cp -r _id build
	cp -r couchapp.json build
	cp -r language build
	cp -r .couchapprc build
	cd build; erica push

clean :
	rm -r build
