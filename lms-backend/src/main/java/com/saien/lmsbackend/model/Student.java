package com.saien.lmsbackend.model;

/**
 * @author Paiker Abbas
 *
 */
public class Student {

	private Integer id;
	private String name;
	private String className;

	/**
	 * @param i
	 * @param string
	 * @param string2
	 */
	public Student(int id, String name, String className) {
		this.id = id;
		this.name = name;
		this.className = className;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", className=" + className + "]";
	}

}
