dirs := _attachments filters views 
files := $(foreach dir,$(dirs),$(wildcard $(dir)/*))


build : $(files) README.md _id language .couchapprc couchapp.json
	rm -rf build
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
	rm -rf build
